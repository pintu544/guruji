const express = require('express')
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

module.exports = route