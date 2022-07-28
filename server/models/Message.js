const mongoose = require("mongoose");

// Data model for messages
const Message = new mongoose.Schema({
  date: {
    type: Date,
  },
  user: {
    type: String,
    required: true,
    maxLength: [15, 'Must be 15 characters or less.']
  },
  room: {
    type: String,
  },
  body: {
    type: String,
    required: true,
    maxLength: [500, 'Must be 500 characters or less.']
  }
});

module.exports = Message;
