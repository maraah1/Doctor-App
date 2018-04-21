const knex = require("../db/knex.js");

module.exports = {

  booking: (req, res) => {
    knex('doctor')
      .where('id', req.params.id)
      .then((docResults) => {
        res.render('book', {
          doctor: docResults[0]
        });
        console.log("get results:", docResults);
      })


  },

  addingApp: (req, res) => {
    knex('doctor').where('id', req.params.id).then((docResults) => {
      knex('appointment')
        .insert({
          doctor_id: req.params.id,
          name: req.body.name,
          date: req.body.date,
          reason: req.body.reason,
          details: req.body.details

        }).then((results) => {
          console.log('insertion:', results);
          res.redirect('/');
        })
    })
  },





}