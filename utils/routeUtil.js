'use strict';

module.exports = function (res, message, statusCode) {
    res.status(statusCode);
    return res.json({message, statusCode});
}