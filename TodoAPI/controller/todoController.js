const Todo = require("../models/Todo");

// create a todo
exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create({
      taskName: req.body.taskName,
      taskDescription: req.body.taskDescription,
      taskStatus: req.body.taskStatus,
      completed: false,
    });

    if (!todo) {
      return res.status(400).json({ message: "todo creation error." });
    }
    return res.status(200).json({ message: "Todo added successful." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error, message: "Internal server error." });
  }
};

// fetch all todos
exports.getTodo = async (req, res) => {
  try {
    const todo = await Todo.find();

    if (todo.length == 0) {
      return res.status(400).json({ todo: [], message: "Todo is empty" });
    }
    return res
      .status(200)
      .json({ todo: todo, message: "Todo fetch successful." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error, message: "Internal server error." });
  }
};

// update todo
exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);

    if (!todo) {
      return res.status(400).json({ message: "Error updating todo." });
    }

    return res.status(200).json({ message: "Todo updated successfully." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error, message: "Internal server error." });
  }
};

// delete todo

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete({ _id: req.params.id });

    if (!todo) {
      return res.status(400).json({ message: "Error deleting todo." });
    }
    return res.status(200).json({ message: "Todo deleted successfully." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error, message: "Internal server error." });
  }
};
