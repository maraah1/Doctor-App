const knex = require("../db/knex.js");

module.exports = {

  specificDoc: (req, res) => {
    knex('doctor').where('id', req.session.user_id).then((results) => {
      knex('appointment')
        .where('appointment.doctor_id', req.session.user_id)
        .then((appResults) => {
          console.log(appResults);
          console.log(results);
          res.render('appointments', {
            doctor: results[0],
            appointment: appResults
          })
        })
    })
  }
}