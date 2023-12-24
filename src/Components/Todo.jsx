import React from 'react'

export default function Todo(props) {
    const {id, title, description} = props.todo;
    console.log(props.todo)
  return (
    <article>
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </article>
  )
}
