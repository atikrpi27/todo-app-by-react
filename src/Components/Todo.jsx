import React from 'react'

export default function Todo(props) {
    console.log(props.todo)
    const {id, title, description, date} = props.todo;
    return (
        <article>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{date}</p>
            </div>
        </article>
    )
}
