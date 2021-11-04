import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
    const { data, deleteTodo, onChangeCheckBox } = props

    return (
        <div>
            {data.map((todo) =>
                <TodoListItem key={todo.id} item={todo} deleteTodo={deleteTodo} onChangeCheckBox={onChangeCheckBox}
                />
            )}
        </div>
    )
}

export default TodoList