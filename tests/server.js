var assert = require('assert');
var server = require('../app');
var supertest = require('supertest');

describe('routes tests ', function() {

    it('add rout should return ok 200 with parameters', function(done) {
        var app = supertest(server);
        app.get('/users')
            .set('Accept', 'application/json')
            .expect(200, done);
    });
})

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});