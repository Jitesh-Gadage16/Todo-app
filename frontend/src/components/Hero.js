import React, {useState,useEffect} from 'react'
import { FaPlus } from 'react-icons/fa';
import Todo from './Todo';
import axios from 'axios';
import TodoLists from './ListTodo'


function Hero() {
    const token = sessionStorage.getItem("token");
    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const BASE_URL = "https://todo-backend-production-2594.up.railway.app/";

    const [showTodo,setShowTodo] = useState(false)
    const [userTodos, setUserTodos] = useState(null);

    const fetchUserTodos = async () => {

        try {
            const resp = await axios.get(`${BASE_URL}api/getTodos`,{ headers: {"Authorization" : `Bearer ${token}`} } )
        console.log(resp)
        console.log(resp.data.token)

        sessionStorage.getItem("token", resp.data.token);
        } catch (error) {
            console.log(error.response.data.message)
        }
        

       
        
    }

    useEffect(()=>{

        fetchUserTodos()
        return
      
      
      }, []);


    function handleAdd(){
        setShowTodo(true)
        console.log("clicked")
    }


    return (
        <>    
        <div className='container py-9 pl-12'>
            <div className='heading-div text-xl font-black'>
              Today <span className="text-sm font-normal">Sun 1 Jan</span>
            </div>
            <div className="add-task-div mt-10 ">
                <div className="flex justify-start align-center">
                <FaPlus className='text-xl'  onClick={handleAdd}/> <div className="ml-2">Add Task</div>

                {
                    showTodo?<Todo fetchUserTodos={fetchUserTodos} BASE_URL={BASE_URL}/>:null
                }
                
                </div>

                <div>
                <TodoLists fetchUserTodos={fetchUserTodos} setUserTodos ={setUserTodos} userTodos={userTodos} BASE_URL={BASE_URL} />
                </div>
            </div>
        </div>
        </>

    )
}

export default Hero