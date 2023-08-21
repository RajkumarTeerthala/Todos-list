import React from 'react'

const TodoList=({todoList,deleteHandler}) => {
  return (
    <div >
   {todoList.map((todo,index)=>
    <div key={index}>
    <h3>{todo}&nbsp;<button onClick={()=>deleteHandler(index)}>&#88;</button></h3>
    </div>)}
    
    </div>
  )
}

export default TodoList
