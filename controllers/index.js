const knex = require("../db/knex.js");

module.exports = {

  doctorsList: (req, res) => {
    knex('doctor').then((doctor) => {
      res.render('docPage', {
        doctor
      })
    })
  },

  getLogin: (req, res) => {
    res.render('login')
  },

  register: (req, res) => {
    knex('doctor').insert(req.body).then((result) => {
      res.redirect('/login')
    })
  },

  login: (req, res) => {
    knex('doctor')
      .where('email', req.body.email)
      .then((results) => {
        let user = results[0]
        if (user.password === req.body.password) {
          req.session.user_id = user.id
          req.session.save(() => {
            res.redirect('/secondPage')
          });
        } else {
          res.redirect('/');
        }
      }).catch(() => {
        res.redirect('/')
      })
  }

}