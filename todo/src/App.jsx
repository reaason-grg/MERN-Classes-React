import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import { useState } from "react";
import { ToDoContext } from "./context/TodoProvider";

const App = () => {
  const { state, dispatch } = useContext(ToDoContext);
  // console.log(state);

  const inputRef = useRef()

  const [todo, setTodo] = useState("");
  const [editId, setEditId] = useState()
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(todo);
    if(editId){
      dispatch({type:'edit',payload:{id:editId,todo}})
      setEditId("");
    }
    else{
       dispatch({ type: "add", payload: todo });
    }
   
    setTodo(" ");
  }

  useEffect(() => {
    inputRef.current.focus();
  }, [])
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        ref={inputRef}
          type="text"
          placeholder="Enter Task..."
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <input type="submit" value={editId? "Edit":"Add"} />
      </form>

      {state.todos.length > 0 ? (
        <div>
          <button onClick={()=>{
            dispatch({type:"removeAll"});
          }}>Clear All</button>
          {state.todos.map((todo) => (
            <div key={todo.id}>
              <p>{todo.todo}</p>
              <div>
                  <button onClick={()=>{
                    dispatch({type:'remove', payload: todo.id})
                  }}>Delete</button>
                  <button onClick={()=>{
                    setEditId(todo.id);
                    setTodo(todo.todo);
                  }}>Edit</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No Todos</div>
      )}
    </div>
  );
};

export default App;