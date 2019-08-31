// Product.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let UserInfo = new Schema({
  FullName: {
    type: String
  },
  Adress: {
    type: String
  },
  Email: {
    type: String
  },
  EnterMessage: {
    type: String
  },
  PhoneNumber: {
    type: Number
  }
},{
    collection: 'User'
});

module.exports = mongoose.model('User', UserInfo);