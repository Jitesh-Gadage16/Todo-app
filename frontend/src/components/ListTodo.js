import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ListTodo() {
    const [todos, setTodos] = useState(null)
    const [show, setShow] = useState(false);

    const fetchTodos = async () => {
        const resp = await axios.get('/getTodos')
        console.log(resp)

        if (resp.data.length > 0) {
            setTodos(resp.data)
        }
    }


    const getTodo = async (e) => {
        let id = e.target
        let _id = id.parentElement.id 
        // console.log()
        const todo = await axios.get(`/getTodo/${_id}`)
        setShow(todo)
      
        console.log(todo)
    }





    

    useEffect(() => {
        fetchTodos()
    })

    return (
        <div>
            <h2>Todos</h2>
            <div className="container">
                <div className='row'>
                    <div className='lg:w-1/2 md:w-2/3 mx-auto'>
                        <div>

                            {
                                todos && todos.map((task) => (
                                    <div id={task._id}>
                                        <div className="text-left p-2 bg-white mb-2"  onClick={(e) => getTodo(e)}>{task.title}</div>


                                        <div  className="">
                                            {show.map((ele) => (
                                                console.log("ele", ele)
                                                
                                            ))
                                            }
                                        </div>
                                    </div>

                                ))
                            }


                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default ListTodo