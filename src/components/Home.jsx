import { v4 as uuidv4 } from 'uuid'
import { Component } from "react";
import TodoList from './TodoList';
import TodoInsert from './TodoInsert';
import style from './Home.module.css'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
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
        }
    }

    addTodo = (newTodo) => {
        const newTodolist = { id: uuidv4(), ...newTodo }

        this.setState({ data: [...this.state.data, newTodolist] })
    }

    onChangeCheckBox = (id) => {
        const itemChecked = this.state.data.map((item)=> item.id === id ? { ...item, completed: !item.completed} : item) 

        this.setState({data: itemChecked})
    }

    deleteTodo = (id) => {
        const filteredTodo = this.state.data.filter((item) => item.id !== id)

        this.setState({ data: filteredTodo })
    }

    render() {
        return (
            <>
                <h1 className={style.title}>Todos</h1>
                <TodoInsert addTodo={this.addTodo} />
                <TodoList onChangeCheckBox={this.onChangeCheckBox} data={this.state.data} deleteTodo={this.deleteTodo} />
            </>
        )
    }
}

export default Home