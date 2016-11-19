'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('orders', (table) => {
    table.increments();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.timestamp('ordered_at').notNullable().defaultTo(knex.fn.now());
    table.string('address1').notNullable().defaultTo('');
    table.string('address2').notNullable().defaultTo('');
    table.string('city').notNullable().defaultTo('');
    table.string('state').notNullable().defaultTo('');
    table.string('zip').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('orders');
};
