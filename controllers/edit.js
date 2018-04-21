const knex = require("../db/knex.js");

module.exports = {

  getEdit: (req, res) => {
    knex('appointment')
      .where('id', req.params.id)
      .then((results) => {
        console.log("appointment results:", results);
        res.render('edit', {
          appointment: results[0]
        })
      })
  },

  update: (req, res) => {
    knex('appointment')
      .where('id', req.params.id)
      .update({
        doctor_id: req.params.id,
        name: req.body.name,
        date: req.body.date,
        reason: req.body.reason,
        details: req.body.details
      }).then((results) => {
        console.log("update:", results);
        res.redirect('/appointments')
      })
  },


}