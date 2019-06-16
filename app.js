var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var log = require('morgan');
const LOGGER = require('./utils/logger');

var indexRouter = require('./routes/api');
var usersRouter = require('./routes/users');
const DeployDb = require('./utils/DeployDB');
const TestService = require('./routes/TestService').TestService;
const CarDamageService = require('./routes/CarDamageService').CarDamageService;
const LeBonCoinService = require('./routes/LeBonCoinService').LeBonCoinService;
const SocietaireService = require('./routes/SocietaireService').SocietaireService;

var app = express();
DeployDb.init().then(() => {
  LOGGER.info("db initialized");


  app.use(log('dev'));
  app.use(express.json());
  app.use(express.urlencoded({extended: false}));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'dist/spa')));

  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  new TestService(app, DeployDb);
  new CarDamageService(app, DeployDb);
  new LeBonCoinService(app, DeployDb);
  new SocietaireService(app, DeployDb);

});


module.exports = app;
