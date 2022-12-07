

const Todo = require("../model/Todo")

const getTodosController = async (req, res) => {
    

    try {
        
       const todos =await Todo.find()
       res.json(todos)
    } catch (error) {
        console.log(error);
        console.log("Error is CreateTodoController");
    }
}


module.exports = getTodosController
