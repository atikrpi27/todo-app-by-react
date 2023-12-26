import React from 'react'

export default function Todo(props) {
    const { title, description } = props.todo;
    const {id} = props;

    const handleRemoveTodo = (id) => {
        props.onRemoveTodo(id);
    };
    
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div>
                <button onClick={() => {handleRemoveTodo(id)} } >Delete</button>
            </div>
        </article>
    )
}
