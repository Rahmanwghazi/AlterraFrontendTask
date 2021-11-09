// import { v4 as uuidv4 } from 'uuid'
// import { useState } from "react";
import TodoList from '../../components/todo_list/TodoList';
import TodoField from '../../components/todo_field/TodoField';
import style from './Home.module.css'
import Navbar from '../../components/navbar/Navbar';

const contentStyle = {
    position: "fixed",
    top: "20%",
    left: "40%",
}

// const initValue = [
//     {
//         id: uuidv4(),
//         todo: "belajar event handling",
//         completed: true
//     },
//     {
//         id: uuidv4(),
//         todo: "belajar graphql",
//         completed: false
//     }
// ]
function Home() {
    // const [data, setData] = useState(initValue)

    // const addTodo = (newTodo) => {
    //     const newTodolist = { id: uuidv4(), ...newTodo }

    //     setData((oldData) => [...oldData, newTodolist])
    // }

    // const onChangeCheckBox = (id) => {
    //     setData((oldData) => oldData.map((item) => {
    //         return item.id === id ? { ...item, completed: !item.completed } : item
    //     }))
    // }

    // const deleteTodo = (id) => {
    //     setData((oldData) => oldData.filter((item) => {
    //         return item.id !== id
    //     }))
    // }
    return (
        <>
            <Navbar />
            <div style={contentStyle}>
                <h1 className={style.title}>Todos</h1>
                <TodoField />
                <TodoList />
            </div>

        </>
    )
}

export default Home