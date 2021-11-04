import { v4 as uuidv4 } from 'uuid'
import { Component, useState } from "react";
import TodoList from './TodoList';
import TodoInsert from './TodoInsert';
import style from './Home.module.css'

const initValue = [
    {
        id: uuidv4(),
        todo: "belajar event handling",
        completed: true
    },
    {
        id: uuidv4(),
        todo: "belajar graphql",
        completed: false
    }
]
function Home() {
    const [data, setData] = useState(initValue)

    const addTodo = (newTodo) => {
        const newTodolist = { id: uuidv4(), ...newTodo }

        setData((oldData) => [...oldData, newTodolist])
    }

    const onChangeCheckBox = (id) => {
        setData((oldData) => oldData.map((item) => {
            return item.id === id ? { ...item, completed: !item.completed } : item
        }))
    }

    const deleteTodo = (id) => {
        setData((oldData) => oldData.filter((item) => {
            return item.id !== id
        }))
    }
    return (
        <>
            <h1 className={style.title}>Todos</h1>
            <TodoInsert addTodo={addTodo} />
            <TodoList onChangeCheckBox={onChangeCheckBox} data={data} deleteTodo={deleteTodo} />
        </>
    )
}

export default Home