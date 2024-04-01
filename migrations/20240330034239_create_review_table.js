/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
   return knex.schema.createTable('reviews', (table) => {
      table.increments('id').primary();
      table
        .integer('daycare_id')
        .unsigned()
        .references('daycares.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.string('reviewer_name').notNullable();
      table.string('comment').notNullable();
      table.integer('rating').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

};
