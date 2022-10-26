const Todo = require('../models/Todo')


// create a todo
exports.createTodo =  async(req,res) =>{
    
    try {
        const todo = await Todo.create({'title': req.body.title});

        if(!todo){
            return res.status(400).json({message: 'todo creation error.'});
        }
        return res.status(200).json({ message: 'Todo added successful.'});

    } catch (error) {
        console.log(error);
        return res.status(500).json({error, message: 'Internal server error.'});
    }
}

// fetch all todos
exports.getTodo = async(req,res) => {
    try {
        const todo = await Todo.find();

        if(todo.length == 0){
            return res.status(400).json({message: 'Todo is empty'});
        }
        return res.status(200).json({ todo: todo, message: 'Todo fetch successful.'});

    } catch (error) {
        console.log(error);
        return res.status(500).json({error, message: 'Internal server error.'});
    }
}

