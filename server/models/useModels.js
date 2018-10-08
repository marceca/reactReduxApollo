const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  userName: String,
  userPass: String,
  userMessages: Array
})

module.exports = mongoose.model('User', userSchema);