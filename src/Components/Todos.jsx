import React from 'react'

import Todo from './Todo'

function Todos(props) {
    // console.log(props.todos)
    return <section>
        {
            props.todos.map((todo,index) => <Todo key={index} todo={todo} />)
        }
    </section>
    
}

export default Todos;