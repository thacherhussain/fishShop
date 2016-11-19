'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('fish', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.string('image').notNullable().defaultTo('');
    table.enu('rating', [1, 2, 3, 4, 5]).notNullable();
    table.decimal('price', 8, 2);
    table.boolean('on_sale');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('fish');
};
