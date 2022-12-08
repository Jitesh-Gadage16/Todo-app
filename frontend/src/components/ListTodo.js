import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ListTodo() {
    const [todos, setTodos] = useState(null)

    const fetchTodos = async () => {
        const resp = await axios.get('/getTodos')
        console.log(resp)

        if (resp.data.length > 0) {
            setTodos(resp.data)
        }
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
                                    <div>
                                        <div className="text-left p-2 bg-white mb-2">{task.title}</div>


                                        <div className='divide-y'>
{todos.map((task) => (
    <div>{task.task}</div>
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