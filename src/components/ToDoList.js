import React from 'react'
import ToDo from './ToDo'

function ToDoList({ todos, setToDo, filteredToDos, colorTheme }) {
    return (
        <div>
            <ul>{filteredToDos.map((todo) => (<ToDo text={todo.text} key={todo.id} setToDo={setToDo} todo={todo} todos={todos} colorTheme={colorTheme} />))}</ul>
        </div>
    )
}

export default ToDoList