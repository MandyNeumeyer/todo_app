import React from 'react'
import { FaCheck,FaRegTrashAlt} from "react-icons/fa";
import '../App.css';
import { IconContext } from "react-icons";


function ToDo({text, key, todos, setToDo, todo, colorTheme }) {
    console.log(colorTheme);

    const handleDelete = () => {
        setToDo(todos.filter((item) => item.id !== todo.id))

    }

    const handleCompleted = () => {
        setToDo(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, isCompleted: !item.isCompleted
                }
            }
            return item;
        }))
    }

    return (
        <div className={`todoDisplay ${colorTheme}`}>
            <li className={`todoItem ${todo.isCompleted? 'completed':''}`}>{text}</li>
            <IconContext.Provider value={{color:"grey", size:"25px"}}>
            <button onClick={handleDelete}><FaRegTrashAlt/></button>
            </IconContext.Provider>
            <IconContext.Provider value={{color:"green", size:"30px"}}>
            <button onClick={handleCompleted}><FaCheck/></button>
            </IconContext.Provider>
        </div>
    )
}

export default ToDo