import React from 'react'

const Todos = ({todos}) => {
  return (
    <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.desc}</h2>
                <button>{todo.completed == true ?"completed":"mark as completed"}</button>
                </div>
        })}
    </div>
  )
}

export default Todos