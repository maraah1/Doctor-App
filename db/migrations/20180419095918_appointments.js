exports.up = function(knex, Promise) {
  return knex.schema.createTable('appointment', (table) => {
    table.increments();
    table.integer('doctor_id')
      .notNullable()
      .references('id')
      .inTable('doctor')
      .onDelete('CASCADE')
      .index();
    table.string('name');
    table.string('date');
    table.string('reason');
    table.text('details');
    table.string('status').defaultTo('unconfirmed');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('appointment')
};