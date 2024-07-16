// import { useState } from 'react'
// import CreateTodo from './components/CreateTodo'
// import './App.css'
// import Todos from './components/Todos'

// function App() {
//   const [todos, setTodos] = useState([])

//   return (
//    <>
//      <CreateTodo></CreateTodo>
//      <Todos todos={[
//       {
//         title:"hello",
//         desc:"how are u",
//         completed:false
//       }
//      ]}></Todos>
//    </>
//   )
// }

// export default App


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [todos, setTodos] = useState([]);
  //const [error, setError] = useState('');

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/todo');
      console.log(response);
      setTodos(response.data.todos);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleCreateTodo = async () => {
    try {
      const response = await axios.post('http://localhost:3000/todo', {
        title,
        desc
      });
      setTitle('');
      setDesc('');
      fetchTodos();
      alert(response.data.msg);
    } catch (error) {
      //setError('Failed to create todo. Please check your input.');
      console.error('Error creating todo:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
        <button onClick={handleCreateTodo}>Create Todo</button>
      </div>
      <ul>
        {todos.map(function (todo) {
          return <li key={todo._id}>
            <h2>{todo.title}</h2>
            <p>{todo.desc}</p>
            <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
          </li>
        }

        )}
      </ul>
    </div>
  );
};

export default App;

