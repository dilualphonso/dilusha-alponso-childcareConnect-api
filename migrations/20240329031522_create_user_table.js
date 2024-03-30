/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('user', (table) => {
      table.increments('id').primary();
      table
        .integer('daycare_id')
        .unsigned()
        .references('id')
        .inTable('daycares')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.string('user_name').notNullable();
      table.string('email').notNullable().unique(); // Added unique constraint for email
      table.string('password').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now()); // Use knex.fn.now() for default timestamp
    });
  };

  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('inventories');
  };
