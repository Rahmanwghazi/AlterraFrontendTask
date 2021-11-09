import { useSelector, useDispatch } from "react-redux"
import TodoListItem from "./TodoListItem";
import { deleteTodo, onChangeCheckBox } from "../../store/TodoListSlice"

const TodoList = () => {
    const todoList = useSelector((state) => state.todoList.todoList)
    const dispatch = useDispatch()

    return (
        <div>
            {todoList.map((todoList) =>
                <TodoListItem key={todoList.id} item={todoList} deleteTodo={()=>{dispatch(deleteTodo(todoList.id))}} onChangeCheckBox={()=>{dispatch(onChangeCheckBox(todoList.id))}}
                />
            )}
        </div>
    )
}

export default TodoList