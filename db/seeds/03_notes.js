exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('note').del()
    .then(function() {
      // Inserts seed entries
      return knex('note').insert([{
        appointment_id: 1,
        note: "It really hurts by the way!"
      }]);
    });
};