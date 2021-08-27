var assert = require('assert');

var server = require('../../app');
var supertest = require('supertest');

const config = require('../../config');

describe('Loin user ', function () {

    it('Login user route should return 401 for invalid body', function (done) {
        var app = supertest(server);
        app.post('/login')
            .set('Accept', 'application/json')
            .expect(401, done);
    });

    it('Login user route should return 401 for invalid password', function (done) {
        var app = supertest(server);
        app.post('/login')
            .send({
                "email": "sandeepab@gmail.com",
                "password": "dummy"
            })
            .set('Accept', 'application/json')
            .expect(401, done);
    });

    it('Login user route should return 200 with with valid request', function (done) {
        var app = supertest(server);
        app.post('/login')
            .send({
                "email": "sandeepab@gmail.com",
                "password": "sandeep_2021"
            })
            .set('Accept', 'application/json')
            .expect(200, done);
    });

});


