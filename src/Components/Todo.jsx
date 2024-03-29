import React from 'react'

import style from './todo.module.css'

export default function Todo(props) {
    const { title, description } = props.todo;
    const {id} = props;

    const handleRemoveTodo = (id) => {
        props.onRemoveTodo(id);
    };
    
    return (
        <article className={style.todo}>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div>
                <button className={style.btn} onClick={() => {handleRemoveTodo(id)} } >Delete</button>
            </div>
        </article>
    )
}
