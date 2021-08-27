var assert = require('assert');

var server = require('../../app');
var supertest = require('supertest');

const config = require('../../config');

describe('Create user ', function () {

  it('post user route should return 401 without api key', function (done) {
    var app = supertest(server);
    app.post('/user')
      .set('Accept', 'application/json')
      .expect(401, done);
  });

  it('post user route should return 400 without body', function (done) {
    var app = supertest(server);
    app.post('/user')
      .set('api-key', config.secret)
      .set('Accept', 'application/json')
      .expect(400, done);
  });

  it('post user route should return 400 with with invalid email', function (done) {
    var app = supertest(server);
    app.post('/user')
      .send({
        "email": "sandeepb",
        "password": "sandeep_2021"
      })
      .set('api-key', config.secret)
      .set('Accept', 'application/json')
      .expect(400, done);
  });

  it('post user route should return 200 with with valid request', function (done) {
    var app = supertest(server);
    app.post('/user')
      .send({
        "email": "sandeepab@gmail.com",
        "password": "sandeep_2021"
      })
      .set('api-key', config.secret)
      .set('Accept', 'application/json')
      .expect(200, done);
  });

});


