var assert = require('assert');

var server = require('../../app');
var supertest = require('supertest');

const config = require('../../config');

describe('Get user ', function () {

  it('get user route should return 401 without invalid token', function (done) {
    var app = supertest(server);
    app.get('/user/:id')
      .set('Accept', 'application/json')
      .expect(401, done);
  });

  it('get user route should return 200 for valid id', function (done) {
    var app = supertest(server);
    app.get('/user/:id')
      .set('autharization', "valid_token")
      .set('Accept', 'application/json')
      .expect(200, done);
  });


});


