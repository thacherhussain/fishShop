/* eslint-disable camelcase, max-len */

'use strict';

exports.seed = function(knex) {
  return knex('orders').del()
    .then(() => {
      return knex('orders').insert([{
        id: 1,
        user_id: 1,
        ordered_at: new Date('2016-06-26 14:26:16 UTC'),
        address1: '123 Main St',
        address2: '',
        city: 'Rockville',
        state: 'MD',
        zip: '20815',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 2,
        user_id: 1,
        ordered_at: new Date('2016-06-26 14:26:16 UTC'),
        address1: '123 Main St',
        address2: '',
        city: 'Rockville',
        state: 'MD',
        zip: '20815',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 3,
        user_id: 2,
        ordered_at: new Date('2016-06-26 14:26:16 UTC'),
        address1: '876 Thurston Ave',
        address2: 'Apt B',
        city: 'Middleton',
        state: 'CT',
        zip: '06457',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('orders_id_seq', (SELECT MAX(id) FROM orders));"
      );
    });
};
