import { useState } from 'react'
import CreateTodo from './components/CreateTodo'
import './App.css'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
     <CreateTodo></CreateTodo>
     <Todos todos={[
      {
        title:"hello",
        desc:"how are u",
        completed:false
      }
     ]}></Todos>
   </>
  )
}

export default App
