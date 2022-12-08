
require('dotenv').config()
require("./config/Database").connect()
const express = require('express')
const app = express()
const port = 3002

const createTodo = require('./controllers/createTodoController')
const getTodos = require('./controllers/getTodosController')
const getTodo = require('./controllers/getTodoController')
const deleteTodo = require('./controllers/deleteTodoController')
const updateTodo = require('./controllers/updateTodoController')
const createTaskTodo = require('./controllers/createTaskTodoController') 
const deteleTask = require('./controllers/deleteTaskController') 
const editTask = require('./controllers/updateTaskController') 
const  searchController = require("./controllers/searchController");


// const search = express.Router();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

//create Todo
app.post('/creatTodo',createTodo )

//Read Todos
app.get('/getTodos',getTodos )

//Read All Todos
app.get('/getTodo/:todoId',getTodo )

//Delete Todo
app.delete  ('/deleteTodo/:todoId',deleteTodo )

//update Todo
app.put('/updateTodo/:todoId',updateTodo )

//create task
app.post('/createTask/:todoId',createTaskTodo )

//delete task
app.delete('/deleteTask/',deteleTask )

//edit task
app.put('/editTask/',editTask )

// app.get("/", searchController);

app.get("/search", searchController);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})   