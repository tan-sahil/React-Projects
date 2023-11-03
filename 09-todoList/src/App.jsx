import { useEffect, useState } from 'react';
import { TodoContextProvider, useTodo } from './contexts/todoContext'
import './App.css'
import { TodoForm, TodoItem } from './components';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {  // todo will be an object 
    setTodos((prev) => ([...prev, {id: Date.now(), ...todo}]));
  }
  const updateTodo = (id, todo) =>{
    setTodos(prev => (prev.map((prevTodo) => (
      (prevTodo.id ===id)? todo : prevTodo))))


  }
  const deleteTodo = (id) => {
    setTodos(prev => (prev.filter (prevTodo => (
      prevTodo.id !== id 
    ))))
  }

  const taskCompleted = (id) => {
    setTodos(prev => (prev.map(prevTodo => (
      prevTodo.id === id ? ({...prevTodo, completed : !prevTodo.completed}) : prevTodo
    ))))
  }
  useEffect(() => {
    // local storage of browser being used
    const values = JSON.parse(localStorage.getItem('todos'))
    if(values && values.length > 0) {
      setTodos(values)
      console.log(values)
    }
    
    
  }, [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    
    
    
  },[todos])

  return (
    <TodoContextProvider value = {{todos, addTodo, updateTodo, taskCompleted, deleteTodo}}>
    
     <h1 className=' bg-orange-400 text-3xl'>To do app</h1>
     <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  <TodoForm/>
              </div>
              <div className="flex flex-wrap gap-y-3">
                {todos.map(todo => (
                  <div className='w-full' key = {todo.id}><TodoItem todo = {todo}/></div>
                ))}
                  {/*Loop and Add TodoItem here */}
              </div>
          </div>
            </div>
    </TodoContextProvider>
    
  )
}

export default App
