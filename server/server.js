const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
const db = "mongodb://localhost:27017/todolist";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(console.log("Database is up and running"))
  .catch((err) => console.log(err));

const todoSchema = new mongoose.Schema({
  title: String,
  complete: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model("todo", todoSchema);

app.get("/todos", (req, res) => {
  Todo.find()
    .then((todo) => res.json(todo))
    .catch((err) => console.log(err));
});

app.post("/todos", (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
  });
  newTodo.save().then((todo) => res.json(todo));
});

app.delete("/todos/:id", (req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(() => res.json({ remove: true }))
    .catch((err) => console.log(err));
});

app.patch("/todos/:id", (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, {
    complete: req.body.complete,
  })
    .then(() => res.json({ update: true }))
    .catch((err) => console.log(err));
});
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
