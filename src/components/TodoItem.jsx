import React, { useContext } from 'react'
import { TodoContext } from '../App'
import { FaTrash } from 'react-icons/fa'

const TodoItem = ({ todo }) => {
  const { toggleCompleted, deleteTodo } = useContext(TodoContext)

  const getTodoTitleStyle = () => {
    return {
      textDecoration: todo.completed ? 'line-through' : 'none',
      color: '#000',
    }
  }

  return (
    <div style={styles.todoItem}>
      <input
        type="checkbox"
        className="custom-checkbox"
        style={styles.checkbox}
        onChange={() => toggleCompleted(todo.id)}
        checked={todo.completed}
      />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      <button style={styles.button} onClick={() => deleteTodo(todo.id)}>
        <FaTrash style={{ color: '#808080' }} />
      </button>
    </div>
  )
}

const styles = {
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    borderBottom: '1px solid #e0e0e0',
    
  },
  checkbox: {
    height: '18px',
    width: '18px',
    marginRight: '20px',
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    marginLeft: '50px',
  },
}

export default TodoItem
