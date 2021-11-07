const deleteButtonStyle ={
    color: "red",
    marginLeft: 50,
    cursor: "pointer"
}

const checkBoxStyle ={
    color: "red",
    marginLeft: 20,
    marginRight: 40
}

const TodoListItem = ({ item, deleteTodo, onChangeCheckBox }) => {
    return (
        <tr>
            <td><input type="checkbox" onClick={() => onChangeCheckBox(item.id)} defaultChecked={item.completed ? true : false} style={checkBoxStyle} /></td>
            <td style={{ textDecoration: item.completed ? "line-through" : null }}>{item.todo}</td>
            <td><h5 onClick={() => deleteTodo(item.id)} style={deleteButtonStyle}>X</h5></td>
        </tr>
    )
}

export default TodoListItem