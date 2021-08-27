const morgan = require("morgan");

let logs = (app) => {
    if (process.env.ENV_NAME !== "DEV") {
        app.use(morgan("combined"));
    } else {
        app.use(morgan("dev"));
    }

    process.on("unhandledRejection", (reason, p) => {
        console.log(reason, "Unhandled Rejection at Promise", p);
    }).on("uncaughtException", (err) => {
        console.log(err, "Uncaught Exception thrown");
    });
};

module.exports = logs;