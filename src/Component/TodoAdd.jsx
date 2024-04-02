import axios from 'axios';
import React, { useState } from 'react'
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import './TodoAdd.css'

function TodoAdd({HandleAddData}) {
    const [formData,setFormData]=useState({
        title:"",
        assignee:"",
        date:""
    })

    const HandleChange=(event)=>{
const {name,value}=event.target;
setFormData((prev)=>({
    ...prev,
    [name]:value
}))
    }
    const HandleAdd=(e)=>{
e.preventDefault()
HandleAddData(formData)
    }

   
  return (
    <div id='div' style={{width:"50%"}}>
        <Input className='input' type="text" placeholder='Task' onChange={HandleChange} name='title' w={500} mt={10} ml={20}/>
        <br />
        <br />
        <Input className='input' type="text" placeholder='assignee' onChange={HandleChange} name='assignee' w={500} ml={20} />
        <br />
        <br />
        <Input className='input' type="date"  onChange={HandleChange} name='date' w={500} ml={20} />
        <br />
        <br />
        <Button id='btn' style={{background:"blue",color:"white",width:"150px",marginLeft:"220px"}} onClick={HandleAdd}>Add</Button>
    </div>
  )
}

export default TodoAdd