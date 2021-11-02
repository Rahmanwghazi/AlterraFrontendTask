import Header from "./components/Header"
import TodoList from "./components/TodoListItem"

export default function TodoListPage({lists}) {
    return (
        <>
            <Header text="To Do App"/>
            {lists.map((list) => <TodoList list={list}/>)}
        </>
    )
}