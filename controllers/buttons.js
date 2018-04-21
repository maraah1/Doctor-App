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

  },
}