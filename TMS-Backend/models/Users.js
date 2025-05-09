const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});

module.exports = mongoose.model('Users', Users);