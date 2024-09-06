import React, { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";
import { toast } from "react-toastify";


const Todo = () => {
  const { addTodo, delTodo, todo, setDone ,setEdit, setInputToEdit} = useTodoStore();
  const [task, setTask] = useState("");
  const hdlSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask("")
    toast.success(`Added ${task}`)

  };


  const hdlEdit = (index) => {
    setEdit(index)
  }
  return (
    <>
      <form onSubmit={hdlSubmit}>
        <input className="input input-bordered w-full max-w-xs" value={task} onChange={(e) => setTask(e.target.value)} />
        <button className="btn">Add</button>
      </form>
      {todo.map((el) =>
        !el.done && !el.editMode? (
          <div key={el.id} className="flex items-baseline">
            <p className="min-w-32" id={el.id} onClick={() => setDone(el.id)}>{el.task}</p>
            <button className="btn" onClick={() => delTodo(el.id)}>Del</button>
            <button className="btn" onClick={(e) => hdlEdit(el.id)}>Edit</button>
          </div>
        ):   !el.done && el.editMode? (
          <div key={el.id}>
            <input className="input input-bordered w-full max-w-xs" id={el.id} value={el.task} onChange={(e)=>setInputToEdit(el.id,e.target.value)}/>
            <button className="btn" onClick={() => delTodo(el.id)}>Del</button>
            <button className="btn" onClick={() => setEdit(el.id)}>Edit</button>
          </div>
        )
         : (
          <div key={el.id}>
          <div key={el.id}>
            <span className="w-full max-w-xs" id={el.id} onClick={() => setDone(el.id)}><del>{el.task}</del></span>
            <button className="btn" onClick={() => delTodo(el.id)}>Del</button>
          </div>
          </div>
        )
      )}
      ;<pre>{JSON.stringify(useTodoStore().todo)}</pre>
    </>
  );
};

export default Todo;
