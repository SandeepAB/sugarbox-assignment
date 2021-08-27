'use strict'

const config = {};

config.port = process.env.PORT || 8000;
config.server = process.env.SERVER || 'localhost';
config.db = {
  'url': process.env.DB_URL || 'mongodb://localhost:27017',
  'name': process.env.DB_NAME || 'sugarbox'
}

config.secret = process.env.SECRET || 'sugarbox'

module.exports = config;