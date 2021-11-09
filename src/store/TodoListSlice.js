import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

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

export const TodoListSlice = createSlice(({
    name: "todoList",
    initialState: {
        todoList: initValue
    },
    reducers: {
        addTodo: (state, action) => {
            const newTodolist = { id: uuidv4(), ...action.payload }
            state.todoList = [...state.todoList, newTodolist]
        },
        deleteTodo: (state, action) => {
            state.todoList = state.todoList.filter(item => {
                return item.id !== action.payload
            })
        },
        onChangeCheckBox: (state, action) => {
            state.todoList = state.todoList.map(item => {
                return item.id === action.payload ? { ...item, completed: !item.completed } : item 
            })
        }
    }
}))

export const {
    addTodo,
    deleteTodo,
    onChangeCheckBox
} = TodoListSlice.actions

export default TodoListSlice.reducer