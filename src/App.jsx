import './App.css'
import React, { useState, createContext } from 'react'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

export const TodoContext = createContext()

function App() {
  
  const [todos, setTodos] = useState([
    
    {
      id: 1,
      title: 'happy and grateful',
      completed: false,  
    },
    {
      id: 2,
      title: 'Run Every Morning',
      completed: false,
    },
    {
      id: 3,
      title: 'Have savings of 20 million',
      completed: false,
    },
  ])
  
  console.log(todos)

  const toggleCompleted = (todoId) => {
    console.log(todoId)
    console.log('toggleCompleted function is called')
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }
  
  const deleteTodo = (todoId) => {
    console.log(todoId)
    console.log('deleteTodo function is called')
    const updatedTodos = todos.filter((todo) => todo.id !== todoId)
    setTodos(updatedTodos)
  }

  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    }

    const updatedTodos = todos.concat(newTodo)
    setTodos(updatedTodos)
  }
  

  return (
    
    <TodoContext.Provider value={{ toggleCompleted, deleteTodo }}>
      <div>
        <h1>2024 Wish List</h1>
        <TodoForm addTodo={addTodo} />
        <Todos todos={todos} />
      </div>
    </TodoContext.Provider>
  )
}

export default App
