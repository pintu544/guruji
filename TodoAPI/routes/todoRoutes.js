const express = require("express");

const { verifyToken } = require("../middleware/jwt");

const { signup, signin } = require("../controller/userController");
const {
  createTodo,
  getTodo,
  deleteTodo,
  updateTodo,
} = require("../controller/todoController");
const route = express.Router();

// create todo
route.post("/create-todo", verifyToken, createTodo);
// get all todo
route.get("/todo", verifyToken, getTodo);
// update todo
route.patch("/update-todo/:id", verifyToken, updateTodo);
// detete todo
route.delete("/todo/:id", verifyToken, deleteTodo);

// user create
route.post("/signup", signup);
// sign in user
route.post("/signin", signin);

module.exports = route;
