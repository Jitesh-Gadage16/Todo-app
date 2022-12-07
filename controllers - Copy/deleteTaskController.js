

const Todo = require("../model/Todo")

const deleteTaskController = async (req, res) => {
    

    try {
      const {id, key} = req.body;

      const todo = await Todo.findById(id).exec();

      todo.task.splice(key, 1);
      await todo.save();
      res.status(200).json(todo)   
    } catch (error) {
        console.log(error);
        console.log("Error is deleteTaskController");
    }
}


module.exports = deleteTaskController
