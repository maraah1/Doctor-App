const index = require("../controllers/index.js")
const second = require("../controllers/second.js")
const book = require("../controllers/book.js")
const view = require("../controllers/view.js")
const edit = require("../controllers/edit.js")
const buttons = require("../controllers/buttons.js")
module.exports = function(app) {

  app.get('/', index.doctorsList)
  app.get('/login', index.getLogin)
  app.post('/register', index.register)
  app.post('/login', index.login)
  app.get('/book/:id', book.booking)
  app.post('/book/:id', book.addingApp)


  app.use(validate);
  app.get('/appointments', second.specificDoc)
  app.get('/appointments/:id', view.specificPatient)
  app.post('/appointments/:id', view.addNote)
  app.get('/edit/:id', edit.getEdit)
  app.post('/edit/:id', edit.update)
  app.get('/complete/:id', buttons.complete)
  app.get('/confirm/:id', buttons.confirm)
  app.get('/delete/:id', buttons.delete)
  app.post('/complete/:id', buttons.completePost)
  app.post('/confirm/:id', buttons.confirmPost)
  app.post('/delete/:id', buttons.deletePost)

}

const validate = (req, res, next) => {
  req.session.user_id ? next() : res.redirect('/login')
}