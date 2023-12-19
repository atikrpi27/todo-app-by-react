import React from 'react'

export default function Todo(props) {
    console.log(props.todo)
    const { id, title, description, date } = props.todo;
    return (
        <article>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{date}</p>
            </div>
        </article>
    )
}
