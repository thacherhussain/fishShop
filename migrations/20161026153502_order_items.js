'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('order_items', (table) => {
    table.increments();
    table.integer('order_id')
      .notNullable()
      .references('id')
      .inTable('orders')
      .onDelete('CASCADE')
      .index();
    table.integer('camera_id')
      .notNullable()
      .references('id')
      .inTable('fish')
      .onDelete('CASCADE')
      .index();
    table.integer('quantity')
      .notNullable()
      .defaultTo(1);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('order_items');
};
