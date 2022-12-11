import React, {useState} from 'react'
import axios from 'axios'

const CreatTask = () => {


    const [todoTitle,setTodoTitle] = useState("")
    const [todoTask,setTodoTask] = useState("")

    console.log(todoTitle,todoTask)

    const submitData = async () => {
        const data = {
            title:todoTitle,
            task:todoTask,
        };

        const res = await axios.post("/creatTodo", data)
        console.log(res.data)  
    };

    // const addTask = async () => {
    //     const Task = {
    //         task:todoTask
    //     };

    //     const addtask = await axios.post("/createTask/:id",Task)

    // }


    const handleSubmit = (event) => {
        event.preventDefault();

        submitData()
    }




    const handleAddTask = (event) => {
        event.preventDefault();

    }

  return (
    <div><form onSubmit={handleSubmit}>
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-6">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Create Todo
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap flex-col -m-2">
            <div className="p-2 w-full flex justify-center">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  TodoTitle
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={todoTitle}
                  onChange={(event) => setTodoTitle(event.target.value)}
                />
              </div>
            </div>
            <div className="p-2 w-full flex justify-center">
              <div className="relative">
                <label
                  htmlFor="Tasks"
                  className="leading-7 text-sm text-gray-600"
                >
                  Tasks
                </label>
                <div className='flex'>
                <input
                  type="Tasks"
                  id="Tasks"
                  name="Tasks"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={todoTask}
                  onChange={(event) => setTodoTask(event.target.value)}
                />
                 <button
                type="submit"
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onSubmit={handleAddTask}
              >
                +
              </button>
                </div>
                
              </div>
            </div>
            <div className="p-2 w-full flex justify-center">
              <button
                type="submit"
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Create todo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </form>
</div>
  )
}

export default CreatTask