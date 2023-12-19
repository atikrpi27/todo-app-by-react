import React, { useState } from 'react'

export default function AddNewTodo() {
    const [todo, setTodo] = useState({id:"", title: "", description: "", date: ""})

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("submitted")
        console.log(todo)
    }

    const handleChange = (e) => {
        const name = e.target.name;
        setTodo((prevTodo) => {
            return{...prevTodo, [name]: e.target.value }
        } )
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="id">ID: </label>
                <input type="text" name="id" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input type="text" name="description" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="date">Date:</label>
                <input type="date" name="date" onChange={handleChange}/>
            </div>
            <div>
                <button type='submit'>Add Todo</button>
            </div>
        </form>
    )
}