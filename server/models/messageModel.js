const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let messageSchema = new Schema({
  userId: String,
  message: String
})

module.exports = mongoose.model('Message', messageSchema);