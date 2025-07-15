const mongoose = require('mongoose');
const Chat = require("./models/chats.js");


main().then((res) => {
  console.log("successfully connected");
});
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/chats");
}

let chats = [
  {
    from: "Sarvesh Kumar",
    to: "rahul yadav",
    msg: "hello bro",
    created_at: new Date(),
  },
  {
    from: "Rahul",
    to: "Jyoti",
    msg: "hi",
    created_at: new Date(),
  }
  , {
    from: "shuivanshu",
    to: "deepika",
    msg: "how are you",
    created_at: new Date(),
  },
  {
    from: "Patlua",
    to: "Sarvesh",
    msg: "You are best",
    created_at: new Date(),
  }
];
Chat.insertMany(chats);