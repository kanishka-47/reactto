import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'< styleName=""></>
import './App.css'
import TodoForm from './components/btn'
import TodoItem from './components/todoitem'
import { List } from './Usecontext'
import Uselist from './Usecontext'
import { Usercontext } from './Usecontext'
function App() {
  const[todos,settodos]=useState([])

  const addtodo=(todo)=>{
    settodos((prev)=>[{id:Date.now(),...todo},...prev])
  }

   const updatetodo=(id,todo)=>{
    settodos((prev)=>prev.map((e)=>(e.id===id ?todo :e )))
   }
   const deleteTodo=(id)=>{
    settodos((prev)=>prev.filter((e)=>(e.id !==id)))
   }

    const togglecomplete=(id)=>{
      settodos((prev)=>prev.map((e)=>(e.id === id ? { ...e, completed: !e.completed }  :e )))
    }

    useEffect(() => {
      const todos = JSON.parse(localStorage.getItem("todos"));
      if (todos && todos.length > 0) {
        settodos(todos);
      }
    }, []);
    

    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])
  return (
   <List value={{todos,addtodo,updatetodo,deleteTodo,togglecomplete}}>
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id}className='w-full'
                          >
                              <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
   </List>
  )
}

export default App
