'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/api/fish', (_req, res, next) => {
  knex('fish')
    .orderBy('name')
    .then((rows) => {
      const fish = camelizeKeys(rows);

      res.send(fish);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/api/fish/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(id)) {
    return next();
  }

  knex('fish')
    .where('id', id)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(404, 'Not Found');
      }

      const camera = camelizeKeys(row);

      res.send(camera);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
