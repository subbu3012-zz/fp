const routes = require('express').Router();
const bodyParser = require('body-parser');
routes.use(bodyParser.urlencoded({ extended: false }))
routes.use(bodyParser.json())

routes.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

let BaseController = require('./controllers/BaseController')

routes.get('/', BaseController.testController);

routes.post('/', BaseController.postTestController);

// routes.post('/register', UserController.registerUser);

// routes.post('/login', UserController.loginUser);
module.exports = routes;