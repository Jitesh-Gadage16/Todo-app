const mongoose = require('mongoose');




const TodoSchema = new mongoose.Schema({
    title: String
    ,
    task: {
      type: [String],
      unique: true
    }
})


// const TodoModel = mongoose.mode('Todo',TodoSchema)

// export default TodoModel


module.exports = mongoose.model('Todo',TodoSchema)