import React, { useState, useEffect } from 'react';
import Form from './Form';
import ToDoList from './ToDoList';



function MyToDoApp({colorTheme}) {
console.log(colorTheme);
const [input, setInput] = useState('');
const [todos, setToDo] = useState([]);
const [status, setStatus] = useState('all')
const [filteredToDos, setFilteredToDos] = useState([])

  useEffect(()=>{
    filterHandler()
    // eslint-disable-next-line
  }, [todos, status])
  

const filterHandler =()=>{
  switch(status){
    case 'completed':
      setFilteredToDos(todos.filter(todo=>todo.isCompleted === true));
      break;
    case 'uncompleted':
      setFilteredToDos(todos.filter(todo=>todo.isCompleted === false));
      break;
    default:
      setFilteredToDos(todos)
      break;
    }
}

  return (
    
    <div className="myTodoApp">
      <Form 
      setInput={setInput} 
      todos={todos} 
      setToDo={setToDo} 
      input={input}
      colorTheme={colorTheme}
      setStatus={setStatus}

      />
      <ToDoList todos={todos} setToDo={setToDo} filteredToDos={filteredToDos} colorTheme={colorTheme}/>
 
    </div>
   
  );
}

export default MyToDoApp;