'use strict';
const mongoose = require('mongoose');
const config = require('./config');

let uristring = `${config.db.url}/${config.db.name}?`;
mongoose.connect(uristring);

// When successfully connected
mongoose.connection.on('connected', function() {
  console.log('Mongoose connection open to cluster');
});

// If the connection throws an error
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose connection disconnected');
});

// When the connection is open
mongoose.connection.on('open', function() {
  console.log('Mongoose connection is open');
});

module.exports = mongoose;
