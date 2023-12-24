import React, { useState } from 'react'

export default function Form(props) {

    const [todo, setTodo] = useState({title:"", description:""});
    const {title, description} = todo;

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddTodo(todo);
        setTodo({ title: "", description: "" })
    }

    const handleData = (e) => {
        const name = e.target.name;
        // console.log(name);
        setTodo((oldTodo) => {
            return { ...oldTodo, [name]: e.target.value}
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Title:</label>
            <input type="text" name='title' value={title} onChange={handleData} />
        </div>
        <div>
            <label htmlFor="description">Description:</label>
            <input type="text" name='description' value={description} onChange={handleData} />
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
    </form>
  )
}
