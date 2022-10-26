const express = require('express')
const { signup, signin} = require('../controller/userController')
const {createTodo, getTodo, deleteTodo, updateTodo} = require('../controller/todoController')
const route = express.Router();


// create todo
route.post('/create-todo',createTodo);
// get all todo
route.get('/todo',getTodo);
// update todo
route.patch('/update-todo/:id', updateTodo)
// detete todo
route.delete('/todo/:id', deleteTodo)

// user create
route.post('/signup', signup)
// sign in user
route.post('/signin', signin)

module.exports = route