import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('')
  
    const handleSubmit = (event) => {
        event.preventDefault()
        addTodo(title)
        setTitle('')
    }
  
    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    placeholder="Add your Wish List"
                    style={styles.formInput}
                    onChange={handleChangeTitle}
                    value={title}
                />
                <button style={styles.button}>Add</button>
            </form>
        </div>
    )
}

const styles = {
    container: {
        marginBottom: '32px',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        display: 'flex',
    },
    formInput: {
        height: '40px',
        width: 'calc(100% - 120px)',
        fontSize: '16px',
        padding: '0 16px',
        border: 'none',
        borderRadius: '4px', // Memperbarui sudut menjadi membulat
        marginRight: '10px',
        backgroundColor: '#f0f0f0',
        color: 'black',
        outline: 'none',
    },
    button: {
        height: '40px',
        width: '120px',
        fontSize: '16px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
}

export default TodoForm
