import React from 'react'

const CreateTodo = () => {
  return (
    <div>
        <input type="text" placeholder='title'/><br />
        <input type="text" placeholder='desc'/><br />
        <button>Add a Todo</button>
    </div>
  )
}

export default CreateTodo