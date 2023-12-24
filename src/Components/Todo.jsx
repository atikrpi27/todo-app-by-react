import React from 'react'

export default function Todo(props) {
    const { title, description } = props.todo;
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </article>
    )
}
