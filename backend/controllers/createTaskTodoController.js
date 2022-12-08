// createTaskTodoController

const Todo = require("../model/Todo")

const createTodoController = async (req, res) => {


    try {
        
        //get todo id using params
        // const todoId = req.params.todoId
        const { id, task } = req.body;

        //find to using findById
        const todo = await Todo.findById(todoId).exec();

        //take the input from user
        // const task = req.body.task

        console.log("task", task)
        //push the input taken from user into task array
        todo.task.push(task)

        // save to DB added task
        const createTask = await todo.save()
    
        res.json(createTask)
    } catch (error) {
        console.log(error);
        console.log("Error is CreateTodoController");
    }
}


module.exports = createTodoController
