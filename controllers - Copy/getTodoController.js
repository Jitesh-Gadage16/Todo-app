

const Todo = require("../model/Todo")

const getTodoController = async (req, res) => {
    

    try {
        const todoId = req.params.todoId
       const allTodos = await Todo.findById(String(todoId))
       console.log(allTodos)
       res.json(allTodos)
    } catch (error) {
        console.log(error);
        console.log("Error is getTodoController");
    }
}


module.exports = getTodoController
