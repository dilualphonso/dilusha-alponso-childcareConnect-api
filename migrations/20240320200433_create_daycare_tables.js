/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('daycares', (table) => {
      table.increments('id').primary();
      table.string('childcare_name').notNullable();
      table.string('address').notNullable();
      table.string('city').notNullable();
      table.string('region').notNullable();
      table.string('postalcode').notNullable();
      table.string('country').notNullable();
     table.string('owner_name').notNullable();
      table.string('age_range').notNullable();
      table.string('years').notNullable();
      table.string('infant_capacity').notNullable();
      table.string('toddler_capacity').notNullable();
      table.string('preschool_capacity').notNullable();
      table.string('contact_phone').notNullable();
      table.string('contact_email').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    });
  };

  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('warehouses');
  };
