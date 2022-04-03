const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  content: String,
  mSender: String,
  mReceiver: String,
  date: {
    type: Date,
    default: new Date(),
  },
});

const MessageModel = mongoose.model("MessageModel", MessageSchema);

module.exports = MessageModel;
