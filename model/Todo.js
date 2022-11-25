import mongoose from 'mongoose'

const TodoSchema = new Schema({
    title: String,
    tasks: [String]
})


const TodoModel = mongoose.model("Todo",TodoSchema)


export default TodoModel