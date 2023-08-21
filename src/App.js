
import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';

function App() {
const [task,setTask]=useState('')
const [todos,setTodos]=useState([])

const changeHandler=(e)=>{
  setTask(e.target.value)
}

const submitHandler=(e)=>{
  e.preventDefault()
  const newTodos=[...todos,task]
  setTodos(newTodos)
  setTask('')
}

const deleteHandler=(indexValue)=>{
const newTodos=todos.filter((todo,index)=>index !==indexValue)
setTodos(newTodos)
}

  return (
    <center>
    <div className="card-container">
    <div className='card-body'>
    <form  onSubmit={submitHandler}>
    <h1>Todos List</h1>
    <input type='text' name='task' value={task} onChange={changeHandler}/> &nbsp;
    <input type='submit' name='Add' value='add' />
    </form>
    <TodoList todoList={todos} deleteHandler={deleteHandler} />
    </div>
    </div>
    </center>
  );
}

export default App;
