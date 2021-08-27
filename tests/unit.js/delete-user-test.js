var assert = require('assert');

var server = require('../../app');
var supertest = require('supertest');

const config = require('../../config');

describe('Delete user ', function () {

  it('delete user route should return 401 without api key', function (done) {
    var app = supertest(server);
    app.delete('/user/:id')
      .set('Accept', 'application/json')
      .expect(401, done);
  });

  it('delete user route should return 400 for invalid id', function (done) {
    var app = supertest(server);
    app.delete('/user/:id')
      .set('api-key', config.secret)
      .set('Accept', 'application/json')
      .expect(400, done);
  });

  it('delete user route should return 200 with with valid request', function (done) {
    var app = supertest(server);
    app.delete('/user/612895b3c45b1bb171306d1b')
      .set('api-key', config.secret)
      .set('Accept', 'application/json')
      .expect(200, done);
  });

});


