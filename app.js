'use strict';

/**
 * This code is written by Sandeep B on 26th Aug 2021
 * 
 * Some of the features added which are not mentioned in assignment mail
 * logs
 * 
 * 
 */

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const http = require('http');
const config = require('./config');
const app = express();
const server = http.createServer(app);

const logs = require("./utils/logs");
logs(app);


let options = {
  inflate: true,
  limit: 200000000,
  type: 'application/json'
};

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw(options));

require('./routes/common')(app);

server.listen(config.port, () => {
  console.log(`Express server started on ${config.server}, listening on port ${config.port} in ${app.get('env')} mode`);
});


app.get('*', function (req, res, next) {
  let err = new Error(`${req.ip} tried to reach ${req.originalUrl}`);
  err.statusCode = 404;
  next(err);
});

module.exports = app;
