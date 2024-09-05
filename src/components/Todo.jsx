import React, { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";


const Todo = () => {
  const { addTodo, delTodo, todo, setDone ,setEdit, setInputToEdit} = useTodoStore();
  const [task, setTask] = useState("");
  const hdlSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
  };


  const hdlEdit = (index) => {
    setEdit(index)
  }
  return (
    <>
      <form onSubmit={hdlSubmit}>
        <input value={task} onChange={(e) => setTask(e.target.value)} />
        <button>Add</button>
      </form>
      {todo.map((el) =>
        !el.done && !el.editMode? (
          <div key={el.id}>
            <span  id={el.id} onClick={() => setDone(el.id)}>{el.task}</span>
            <button onClick={() => delTodo(el.id)}>Del</button>
            <button  onClick={(e) => hdlEdit(el.id)}>Edit</button>
          </div>
        ):   !el.done && el.editMode? (
          <div key={el.id}>
            <input  id={el.id} value={el.task} onChange={(e)=>setInputToEdit(el.id,e.target.value)}/>
            <button onClick={() => delTodo(el.id)}>Del</button>
            <button  onClick={() => setEdit(el.id)}>Edit</button>
          </div>
        )
         : (
          <div key={el.id}>
            <span onClick={() => setDone(el.id)}>
              <del>{el.task}</del>
            </span>
            <button onClick={() => delTodo(el.id)}>Del</button>
          </div>
        )
      )}
      ;<pre>{JSON.stringify(useTodoStore().todo)}</pre>
    </>
  );
};

export default Todo;
