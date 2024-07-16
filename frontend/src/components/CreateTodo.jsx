import React, { useState } from 'react'

const CreateTodo = () => {
    const [title,setTitle]= useState("")
    const [desc,setDesc] = useState(" ")

   async function getTodo(){
      const res = await fetch('http://localhost:3000/todo',{
        method:"POST",
        body:JSON.stringify({
            title:title,
            desc:desc,
        }),
        headers:{
            "content-Type":"application/json"
        }
      });
     const data = res.json()
    }
  return (
    <div>
        <input  id="title" type="text" placeholder='title' onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value)
        }}/><br />
        <input type="text" placeholder='desc' onChange={function(e){
            const value = e.target.value;
            setDesc(e.target.value)
        }}/><br />
        <button onClick={getTodo}>Add a Todo</button>
    </div>
  )
}

export default CreateTodo