'use strict';

const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
const router = express.Router();

const authorize = function(req, res, next) {
  const token = req.cookies.token;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(boom.create(401, 'Unauthorized'));
    }

    req.token = decoded;

    next();
  });
};

router.get('/api/orders', authorize, (req, res, next) => {
  knex('orders')
    .where('user_id', req.token.userId)
    .orderBy('created_at', 'DESC')
    .then((rows) => {
      const orders = camelizeKeys(rows);

      res.send(orders);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/api/orders/:id', authorize, (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(id)) {
    return next();
  }

  let order;

  knex('orders')
    .where('id', id)
    .where('user_id', req.token.userId)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(404, 'Not Found');
      }

      order = camelizeKeys(row);

      return knex('order_items')
        .innerJoin('fish', 'order_items.camera_id', 'fish.id')
        .where('order_id', order.id);
    })
    .then((items) => {
      order.items = items;

      res.send(order);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/orders', authorize, (req, res, next) => {
  const { items, address1, address2, city, state, zip } = req.body;
  const { userId } = req.token;

  if (!address1 || !address1.trim()) {
    return next(boom.create(400, 'Address must not be blank'));
  }

  if (!city || !city.trim()) {
    return next(boom.create(400, 'City must not be blank'));
  }

  if (!state || !state.trim()) {
    return next(boom.create(400, 'State must not be blank'));
  }

  if (!zip || !zip.trim()) {
    return next(boom.create(400, 'Zip must not be blank'));
  }

  const insertOrder = { userId, address1, address2, city, state, zip };
  let order;

  knex('orders')
    .insert(decamelizeKeys(insertOrder), '*')
    .then((rows) => {
      order = camelizeKeys(rows[0]);

      return knex('order_items')
        .insert(decamelizeKeys(items.map((item) => {
          return {
            orderId: order.id,
            cameraId: item.cameraId,
            quantity: item.quantity
          };
        })));
    })
    .then(() => {
      res.send(order);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
