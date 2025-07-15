# 💬 Chat App — CRUD with Node.js, Express & MongoDB

A simple and clean web-based Chat Message System that allows users to **create**, **read**, **update**, and **delete** messages. Built using **Node.js**, **Express**, **MongoDB**, and **EJS**.

> 🧑‍💻 Developed by **Sarvesh Kumar**  
> 📚 BCA 6th Semester, Mahadev PG College, Varanasi (Affiliated to MGKVP)  
> 🔗 GitHub Repository: [https://github.com/R5207644/chat](https://github.com/R5207644/chat)

---

## 📋 Features

- ✅ Add new chat messages  
- 📄 View all chats with timestamps  
- ✏️ Edit chat content  
- ❌ Delete chats  
- 🕓 Track created & updated time  
- 🎨 Clean UI with custom CSS styling  

---

## 🚀 Getting Started

Follow these steps to run the app locally:

### 1. 📦 Clone the Repository

```bash
git clone https://github.com/R5207644/chat.git
cd chat
````

### 2. 📥 Install Dependencies

```bash
npm install
```

This installs:

* express
* mongoose
* ejs
* method-override
* (optional) dotenv

---

## 🗄️ MongoDB Setup

### Option A: Use Local MongoDB (Default)

The app connects to a local MongoDB database by default:

```js
mongodb://127.0.0.1:27017/chats
```

Make sure MongoDB is running locally.

### Option B: Use MongoDB Atlas (Remote)

Replace the MongoDB URL in both `index.js` and `init.db.js`:

```js
await mongoose.connect("your-mongodb-connection-url");
```

> 📌 Example:

```js
await mongoose.connect("mongodb+srv://username:password@cluster.mongodb.net/chats");
```

---

## 🌱 Optional: Seed Sample Data

Run this command **once** to populate the database with dummy chat entries:

```bash
npm run seed
```

This runs `init.db.js` to insert a few messages.

---

## ▶️ Run the Application

Start the server:

```bash
npm start
```

Then visit:

```
http://localhost:8080
```

---

## 🧪 Scripts

```json
"scripts": {
  "start": "node index.js",
  "seed": "node init.db.js"
}
```

---

## 📁 Folder Structure

```
chat/
├── models/              # Mongoose schema
│   └── chats.js
├── public/              # CSS styling
│   └── styles.css
├── views/               # EJS templates
│   ├── index.ejs        # Chat list
│   ├── new.ejs          # New chat form
│   └── edit.ejs         # Edit chat form
├── index.js             # Main Express app
├── init.db.js           # Seeds sample data
├── package.json         # NPM config and dependencies
└── README.md
```

---

## 🔒 (Optional) Use .env File for MongoDB URL

1. Install dotenv:

```bash
npm install dotenv
```

2. Create `.env` file:

```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/chats
```

3. Update `index.js` and `init.db.js`:

```js
require("dotenv").config();
await mongoose.connect(process.env.MONGO_URL);
```

---

## 👨‍🎓 Author

**Sarvesh Kumar**
BCA 6th Semester
Mahadev PG College, Bariyasanpur, Varanasi
Affiliated to MGKVP University

---

## 📜 License

This project is open-source and free to use for learning and personal projects.

---
