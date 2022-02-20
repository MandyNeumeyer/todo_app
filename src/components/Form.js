import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import alien from '../images/alien.png'
import { BsPlusSquare } from "react-icons/bs";
import { IconContext } from "react-icons";


function Form({ setInput, todos, setToDo, input, setStatus, colorTheme }) {
    console.log(colorTheme)
    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const addToDo = (e) => {
        e.preventDefault();
        if (input.trim() === "") return
        setToDo([...todos, { text: input, isCompleted: false, id: uuidv4() }])
        setInput('')

    }

    const handleStatus = (e) => {
        setStatus(e.target.value)
    }

    return (
        <section className="form-control-wrapper">
            <form className="form">
                <div className="alien">
                    <img src={alien} alt="alien" />
                </div>
                <div className="form-header">
                    <input className="enterTodo" value={input} onChange={handleInput} placeholder="enter todo" type="text" />
                    <IconContext.Provider value={{ color: 'red', fontSize: '55px' }}>
                        <button className="addBtn" onClick={addToDo} type="submit"><BsPlusSquare size={28} /></button>
                    </IconContext.Provider>
                    <div>
                        <select onChange={handleStatus} name="todos">
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </div>
            </form>
        </section>


    )
}

export default Form