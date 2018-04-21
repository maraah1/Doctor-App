exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('doctor').del()
    .then(function() {
      // Inserts seed entries
      return knex('doctor').insert([{
          name: "Dr. Car-Michael",
          email: "carmichaelpractices@gmail.com",
          bio: "certified doctor for 5 years",
          img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgsqWvZuQ9HiLCki7AAvt8ZSMUZxsi_CYmebspc2jSLZUS2VYt0g',
          password: 'medhead'
        },
        {
          name: "Dr. Ted",
          email: "ted@gmail.com",
          bio: "certified doctor for 20 years",
          img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTB-ECqmVre79wf83P-pthfi4Qs9xK4IzQsK7GsiA4CvDrhoPU',
          password: 'tedrules'
        },
        {
          name: "Dr. Liz",
          email: "liz@yahoo.com",
          bio: "certified doctor for 6 years",
          img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqmkrYg8miox42zz5O8mMVXB0DxlMNU2xdCXrVotbtjGQbOPcV',
          password: 'lizthewiz'
        }
      ]);
    });
};