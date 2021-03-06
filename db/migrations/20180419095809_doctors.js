exports.up = function(knex, Promise) {
  return knex.schema.createTable('doctor', (table) => {
    table.increments();
    table.string('name');
    table.string('email');
    table.text('bio');
    table.text('img_url');
    table.string('password');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('doctor')
};