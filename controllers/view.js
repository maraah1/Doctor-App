const knex = require("../db/knex.js");

module.exports = {

  specificPatient: (req, res) => {
    knex('note')
      .where('appointment_id', req.params.id)
      .then((noteResults) => {
        knex('appointment')
          .where('id', req.params.id)
          .then((results) => {
            res.render('view', {
              appointment: results[0],
              notes: noteResults
            })
          })
      })
  },

  addNote: (req, res) => {
    knex('appointment')
      .where('id', req.params.id)
      .then((appResults) => {
        knex('note')
          .where('id', req.params.id)
          .insert({
            appointment_id: req.params.id,
            note: req.body.note
          }).then((results) => {
            console.log('insert:', results);
            res.redirect('/')
          })
      })
  }

}