const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const Chat = require("./models/chats.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


main().then((res) => {
  console.log("successfully connected");
});
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/chats");
}

app.get("/", (req, res) => {
  res.redirect("/chats");
});

app.listen(8080, () => {
  console.log("Server id listening on port 8080");
});

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
});

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
})

app.post("/chats", (req, res) => {
  let { from, msg, to } = req.body;
  let newChat = new Chat({
    from: from,
    msg: msg,
    to: to,
    created_at: new Date(),
  });
  newChat.save().then((res) => {
    console.log("new message send");
  }).catch(err => {
    console.log(err);
  });
  res.redirect("/chats");
});

app.post("/chats/edit", async (req, res) => {
  let { id } = req.body;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

//update route
app.put("/chats/:id", async(req, res) => {
  let { msg } = req.body;
  let { id } = req.params;

  await Chat.findByIdAndUpdate(id, { msg: msg, updated_at:new Date(), }, { runValidators: true, new:true },);
  res.redirect("/chats");
});

//delete route
app.delete("/chats/:id", async(req, res) => {
  let {id} = req.params;
  await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});