exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('doctor').del()
    .then(function() {
      // Inserts seed entries
      return knex('doctor').insert([{
        name: "Dr.CarMichael",
        email: "carmichaelpractices@gmail.com",
        bio: "certified doctor for 5 years",
        img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgsqWvZuQ9HiLCki7AAvt8ZSMUZxsi_CYmebspc2jSLZUS2VYt0g',
        password: 'medhead'
      }]);
    });
};