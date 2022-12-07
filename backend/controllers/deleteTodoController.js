

const Todo = require("../model/Todo")

const deleteTodoController = async (req, res) => {
    

    try {
        const todoId = req.params.todoId
       const allTodos =await Todo.findByIdAndDelete(todoId)
       console.log(allTodos)
       res.json(allTodos)
       res.send("Todo Deleted")
    } catch (error) {
        console.log(error);
        console.log("Error is deleteTodoController");
    }
}


module.exports = deleteTodoController
