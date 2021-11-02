const listItem = {
    width: "fit-content",
    borderRadius: 50,
    border: "2px solid black",
    padding: "5px",
    marginLeft: 25,
    marginBottom: 10,
}
const completedlist = {
    textDecoration: "line-through"
}

export default function TodoList({ list }) {
    console.log(list.completed)
    return (
        <div style={listItem}>
            <h5 style={list.completed ? completedlist : null}>{list.title}</h5>
        </div>
    )
}