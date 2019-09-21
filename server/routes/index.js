const registration = require("./registration");

module.exports = function(app, db) {
    registration(app, db);
};
