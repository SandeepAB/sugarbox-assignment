'user strict';
const User = require('../models/user');
const jwt = require('jsonwebtoken')
const util = require('../utils/other');

const controller = {};




controller.postUser = (req) => {
    return new Promise((resolve, reject) => {
        let body = req.body, header = req.headers;
        if (!(header && header["api-key"] && header["api-key"] == "sugarbox")) resolve({ "message": 'Missing/Invalid API Key', "statusCode": 401 });

        if (!(body.password && body.email)) resolve({ "message": 'Invalid Data', "statusCode": 400 });
        if (!util.validateEmail(body.email)) {
            return resolve({ "message": 'Invalid Email', "statusCode": 400 });
        }
        let user = new User();
        user.password = user.generateHash(body.password);
        user.email = body.email;
        user.tasks = [];

        return user.save().then(() => {
            return resolve({ "message": "User saved successfully", "statusCode": 200 })
        }).catch(err => {
            return reject(err);
        });
    })
}

controller.getUsers = (req) => {
    let body = req.body, header = req.headers, params = req.query;
    return new Promise((resolve, reject) => {
        if (!(header && header["api-key"] && header["api-key"] == "sugarbox")) return resolve({ "message": 'Missing/Invalid API Key', "statusCode": 401 });
        let pagination = {};

        if (params && params["index"] && Number.isInteger(Number(params["index"]))) pagination["skip"] = Number(params["index"]);
        if (params && params["limit"] && Number.isInteger(Number(params["limit"]))) pagination["limit"] = Number(params["limit"]);

        console.log(pagination);
        User.find({}, { __v: 0, password: 0 , tasks : 0}, pagination).then((users) => {
            return resolve({ "message": users, "statusCode": 200 })
        });
    });
}

controller.getUser = (req) => {
    let id = req.params.id;
    return new Promise((resolve, reject) => {
        if (req.headers["authorization"] && jwt.verify(req.headers["authorization"], 'sugarbox')) {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                User.findById({ _id: id }, { __v: 0, password: 0 }).then((users) => {
                    return resolve({ "message": users, "statusCode": 200 })
                });
            }
            else {
                return resolve({ "message": "Invalid userId", "statusCode": 400 });
            }
        }
        else {
            return resolve({ "message": "Invalid/missing token", "statusCode": 401 });
        }
    });
}

controller.deleteUser = (req) => {
    let id = req.params.id;
    return new Promise((resolve, reject) => {
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            User.findOneAndRemove({ _id: id }, { __v: 0, password: 0 }).then((users) => {
                return resolve({ "message": users, "statusCode": 200 });
            });
        }
        else {
            return resolve({ "message": "Invalid userId", "statusCode": 400 });
        }
    });
}


controller.getLogin = (body) => {
    return new Promise((resolve, reject) => {
        if (!(body.email && body.password)) resolve({ "message": 'Invalid Data', "statusCode": 400 })
        const filter = { email: body.email };
        User.findOne(filter, {}).then((user) => {
            if (user.validPassword(body.password)) {
                let token = jwt.sign({
                    data: JSON.stringify({ email: body.email, password: body.password })
                }, 'sugarbox', { expiresIn: 60 });
                return resolve({ "message": { user: user, token: token }, "statusCode": 200 });
            }
            else {
                return resolve({ "message": "Invalid password", "statusCode": 401 })
            }
        }).catch(err => {
            return reject(err);
        });
    });
}


module.exports = controller;
