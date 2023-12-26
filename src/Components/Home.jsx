import React, { useState } from 'react'

import Todos from './Todos'
import Form from './Form'
import { v4 as uuidv4 } from 'uuid'

function Home() {

    const [todos, setTodos] = useState([]);

    const handleAddTodo = (todo) => {
        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuidv4(), todo }];
        });
        console.log(todo)
    };

    const handleRemoveTodo = (id) => {
        setTodos((prevTodos) => {
            const removeTodo = prevTodos.filter((todo) => todo.id !== id );
            return removeTodo;
        })
    }

    return (
        <div>
            <h1>Todo App</h1>
            <Form onAddTodo={handleAddTodo} />
            <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
        </div>
    )
}

export default Home