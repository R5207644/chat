const mongoose = require("mongoose");
const chatSchema = new mongoose.Schema({
  from : {
    type : String,
    required: true,
  },
  to : {
  type : String,
  required : true,
  },
  msg : {
    type : String,
    maxLength : 50,
  },
  created_at : {
    type : String,
    required : true,
  },
  updated_at:String,
});

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;