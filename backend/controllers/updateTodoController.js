

const Todo = require("../model/Todo")

const updateTodocontroller = async (req, res) => {


    try {
        const editTodo = await Todo.findByIdAndUpdate(req.params.todoId, req.body)

        console.log(editTodo)
        res.status(200).json(editTodo)
    } catch (error) {
        console.log(error);
        console.log("Error is updateTodocontroller");
    }
}


module.exports = updateTodocontroller
