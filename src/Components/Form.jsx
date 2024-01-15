import React, { useState } from 'react'

import style from './form.module.css'

export default function Form(props) {

    const [todo, setTodo] = useState({ title: "", description: "" });
    const { title, description } = todo;

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddTodo(todo);
        setTodo({ title: "", description: "" })
    }

    const handleData = (e) => {
        const name = e.target.name;
        // console.log(name);
        setTodo((oldTodo) => {
            return { ...oldTodo, [name]: e.target.value }
        })
    }

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <div className={style['form-field']}>
                <label htmlFor="title">Title:</label>
                <input type="text" name='title' value={title} onChange={handleData} />
            </div>
            <div className={style['form-field']}>
                <label htmlFor="description">Description:</label>
                <textarea type="text" name='description' value={description} onChange={handleData} />
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
                <div style={{width:'20%'}}></div>
                <div style={{width:'80%', margin: '0 auto'}}>
                    <button type='submit'>Submit</button>
                </div>
            </div>
        </form>
    )
}
