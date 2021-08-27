const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

require('../db');

let userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  tasks : [{type: String}]
});

userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);





