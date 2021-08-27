'use strict';

const userController = require('../modules/user-controller');
const routeUtil = require('../utils/routeUtil');
var path = require("path");

module.exports = function (app) {

    app.post('/user', postUser);
    app.delete('/user/:id', deleteUser);

    app.get('/users', getUsers);
    app.get('/user/:id', getUser);

    app.post('/login', getLogin);


    function postUser(req, res) {
        return userController.postUser(req).then((isUserCreated) => {
            return routeUtil(res, isUserCreated.message, isUserCreated.statusCode);
        }).catch((err) => {
            return routeUtil(res, `error when saving user: ${err}`, 500);
        });
    }

    function getUsers(req, res) {
        return userController.getUsers(req).then((data) => {
            return routeUtil(res, data.message, data.statusCode);
        }).catch((err) => {
            return routeUtil(res, `error when fetching users: ${err}`, 500);
        });
    }

    function getUser(req, res) {
        return userController.getUser(req).then((data) => {
            return routeUtil(res, data.message, data.statusCode);
        }).catch((err) => {
            return routeUtil(res, `error when fetching users: ${err}`, 500);
        });
    }

    function deleteUser(req, res) {
        return userController.deleteUser(req).then((data) => {
            return routeUtil(res, data.message, data.statusCode);
        }).catch((err) => {
            return routeUtil(res, `error when deleting user: ${err}`, 500);
        });
    }

    function getLogin(req, res) {
        return userController.getLogin(req.body).then((user) => {
            return routeUtil(res, user.message, user.statusCode);
        }).catch((err) => {
            return routeUtil(res, `error when loging in user: ${err}`, 500);
        });
    }
}
