import React, { useEffect, useState } from 'react'
import TodoAdd from './TodoAdd'
import TodoItem from './TodoItem'
import axios from 'axios'

function Todo() {
    const [todo,setTodo]=useState([])

    useEffect(()=>{
getData()
    },[])

    const getData=async()=>{
        try {
            let {data}=await axios({
                method:"GET",
                url:"http://localhost:3000/todo",

            })
            setTodo(data)
        } catch (error) {
            
        }
    }

    const HandleAddData=(formData)=>{
       
            axios({
                method:"POST",
                url:"http://localhost:3000/todo",
                data:formData
            }).then(()=>getData())
            .then((error)=>console.log(error))
         
    }

    const HandleDelete=(id)=>{
        axios({
            method:"DELETE",
            url:`http://localhost:3000/todo/${id}`
        }).then(()=>getData())
        .catch((error)=>console.log(error))
    }

    const HandleUpdate=(id,status)=>{
        axios({
         method:"PATCH",
         url:`http://localhost:3000/todo/${id}`,
         data:{status:!status}
        }).then(()=>getData())
        .catch((error)=>console.log(error))
     }
    
  return (
    <div>
        <TodoAdd HandleAddData={HandleAddData} />
        {
            todo.map((ele)=>{
                return   <TodoItem {...ele} HandleDelete={HandleDelete} HandleUpdate={HandleUpdate}/>
            })
        }
      
    </div>
  )
}

export default Todo