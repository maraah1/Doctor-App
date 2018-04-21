const knex = require("../db/knex.js");

module.exports = {
  complete: (req, res) => {
    knex('appointments')
      .where('id', req.params.id)
      .then((results) => {
        res.render('view')
      })
  },

  completePost: (req, res) => {
    knex('appointment')
      .where('id', req.params.id)
      .update({
        status: "completed"
      }).then((results) => {
        res.redirect('/appointments')
      })

  },

  confirm: (req, res) => {
    knex('appointments')
      .where('id', req.params.id)
      .then((results) => {
        res.render('view')
      })
  },

  confirmPost: (req, res) => {
    knex('appointment')
      .where('id', req.params.id)
      .update({
        status: "confirmed"
      }).then((results) => {
        res.redirect('/appointments')
      })
  },

  delete: (req, res) => {
    knex('appointments')
      .where('id', req.params.id)
      .then((results) => {
        res.render('view')
      })
  },

  deletePost: (req, res) => {
    knex('appointment')
      .where('id', req.params.id)
      .delete().then((results) => {
        res.redirect('/appointments')
      })
  }

}