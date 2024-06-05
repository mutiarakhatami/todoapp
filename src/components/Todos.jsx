import React from 'react'
import TodoItem from './TodoItem'

const Todos = ({ todos }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        )
      })}
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
}

export default Todos
