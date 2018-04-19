exports.up = function(knex, Promise) {
  return knex.schema.createTable('note', (table) => {
    table.increments();
    table.integer('appointment_id')
      .notNullable()
      .references('id')
      .inTable('appointment')
      .onDelete('CASCADE')
      .index();
    table.text('note');

    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('note')
};