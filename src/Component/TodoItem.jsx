import React from 'react'
import { Button } from '@chakra-ui/react'

function TodoItem({id,title,assignee,date,HandleDelete,status,HandleUpdate}) {
  return (
   
    <div style={{border:"2px solid black",width:"300px",marginTop:"20px" , marginLeft:"150px"}}>
        <p>title:{title}</p>
        <p>assignee:{assignee}</p>
        <p>date:{date}</p>
        <p style={{cursor:"pointer"}} onClick={()=>HandleUpdate(id,status)}>status:{status?"Complete" : "Pending"}</p>
        <Button style={{background:"grey"}} onClick={()=>HandleDelete(id)}>Delete</Button>
    </div>
   
  )
}

export default TodoItem