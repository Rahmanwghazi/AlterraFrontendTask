import { useState } from 'react'
import style from './TodoField.module.css'
import { useDispatch } from "react-redux"
import { addTodo } from '../../store/TodoListSlice'

const initData = {
    todo: "",
    completed: false
}

function TodoField() {
    const [data, setData] = useState(initData)
    const dispatch = useDispatch()

    const onChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const newData = {
            todo: data.todo,
            completed: data.completed
        }
        dispatch(addTodo(newData))
        setData({
            todo: "",
            completed: false
        })
    }
        return (
            <>
                <input className={style.textField} type="text" placeholder="add todo" value={data.todo} name="todo" onChange={onChange}></input>
                <button onClick={onSubmit} className={style.button} disabled={data.todo.length < 1}>submit</button>
            </>
        )


}

export default TodoField