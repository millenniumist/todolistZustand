import { create } from "zustand";
import { persist } from "zustand/middleware";

const useLocal = {
  partialize: (state)=> ({todo:state.todo,}),
  name: "todo" 
}

const useRaw = 
    (set) => ({
      todo: [
        { id: 1, task: "Shower", done: false, editMode: false },
        { id: 2, task: "Breakfast", done: false, editMode: false },
      ],
      addTodo: (task) =>
        set((state) => ({
          todo: [
            ...state.todo,
            { id: state.todo.length + 1, task: task, done: false },
          ],
        })),
      delTodo: (index) =>
        set((state) => ({ todo: state.todo.filter((el) => el.id !== index) })),
      setDone: (index) =>
        set((state) => ({
          todo: state.todo.map((el) =>
            el.id === index ? { ...el, done: !el.done } : el
          ),
        })),
      setEdit: (index) =>
        set((state) => ({
          todo: state.todo.map((el) =>
            el.id === index ? { ...el, editMode: !el.editMode } : el
          ),
        })),
      setInputToEdit: (index, input) =>
        set((state) => ({
          todo: state.todo.map((el) =>
            el.id === index ? ({...el,task:input}) : el
          ),
        })),
    })
   

    export const useTodoStore = create(persist(useRaw,useLocal))
  

