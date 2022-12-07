

const Todo = require("../model/Todo")

const updateTaskController = async (req, res) => {
    

    try {
      const {id, key,newtask} = req.body;

      const todo = await Todo.findById(id).exec();

      todo.task[key] = newtask
      await todo.save();
      res.status(200).json(todo)   
    } catch (error) {
        console.log(error);
        console.log("Error is updateTaskController");
    }
}


module.exports = updateTaskController
