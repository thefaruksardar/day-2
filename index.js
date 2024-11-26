const mongoose = require("mongoose");
const TODO = require("./model/todoSchema");
const express = require("express");
const app = express();
app.listen(3000);

// Connect Mongoose
mongoose
  .connect("mongodb+srv://faruk:ttnn1133@todo.fpsbs.mongodb.net/Todo")
  .then((data) => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from post 3000");
});

app.post("/add-todo", (req, res) => {
  const todo = new TODO({
    task: "Make morning Coffee",
  });

  todo
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get("/get-todo", (req, res) =>
  TODO.find()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    })
);
