const express = require('express')
const {createTodo, getTodo} = require('../controller/todoController')
const route = express.Router();


route.post('/create-todo',createTodo);
// get all questions
route.get('/todo',getTodo);


module.exports = route