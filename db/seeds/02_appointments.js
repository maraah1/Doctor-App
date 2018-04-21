exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('appointment').del()
    .then(function() {
      // Inserts seed entries
      return knex('appointment').insert([{
          doctor_id: 1,
          name: "Oscar",
          date: "4/20/18",
          reason: "excruciating migrane",
          details: "I have a huge migrane that will not go away"
        },
        {
          doctor_id: 1,
          name: "Sam",
          date: "4/20/18",
          reason: "stomachache",
          details: "I feel like I am dying from the inside out"
        },
        {
          doctor_id: 3,
          name: "Chelsea",
          date: "4/20/18",
          reason: "flu",
          details: "I get cold sweats and can't keep anything down!"
        }
      ]);
    });
};