import React, { useState } from 'react'
import Todos from './Todos'
import Form from './Form'

// const localTodo = [
//     {
//         id: 1,
//         title: "Title 1",
//         description: "This is description-1 for Title-1"
//     },
//     {
//         id: 2,
//         title: "Title 2",
//         description: "This is description-2 for Title-2"
//     }
// ]

function Home() {

    const [todos, setTodo] = useState([])

    const handleAddTodo = (newTodo) =>{
       setTodo((prevTodos) => {
        return [ ...prevTodos, {newTodo} ]
       })
    }

    return (
        <div>
            <Form onAddTodo={handleAddTodo} />
            <Todos todos={todos} />
        </div>
    )
}

export default Home