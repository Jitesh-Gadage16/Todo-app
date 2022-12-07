// createTodoController

const Todo = require("../model/Todo")

const createTodoController = async (req, res) => {
    

    try {
        
        const newTodo = new Todo(
            title = req.body,
            task = req.body.task
        )

        const createdNewTodo = await newTodo.save()
        res.json(createdNewTodo)
    } catch (error) {
        console.log(error);
        console.log("Error is CreateTodoController");
    }
}


module.exports = createTodoController
