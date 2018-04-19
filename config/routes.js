const index = require("../controllers/index.js")
const second = require("../controllers/second.js")
module.exports = function(app) {

  app.get('/', index.doctorsList)
  app.get('/login', index.getLogin)
  app.post('/register', index.register)
  app.post('/login', index.login)

  app.use(validate);
  app.get('/secondPage', second.specificDoc)
}

const validate = (req, res, next) => {
  req.session.user_id ? next() : res.redirect('/login')
}