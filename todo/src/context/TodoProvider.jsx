import React, { useReducer, createContext } from "react";

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "add": {
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), todo: action.payload }],
      };
    }
      case "remove":{
        return{...state,todos:state.todos.filter((todo)=>todo.id!==action.payload)}
      }
    
      case"edit": {
        return{...state,todos:state.todos.map((todo)=>todo.id==action.payload.id? {...todo,todo:action.payload.todo}:todo)}
      }
      case "removeAll":{
        return{...state,todos:[]};
      }

    default:
      return state;
  }
};

export const ToDoContext = createContext();
const ToDoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
  });
  return (
    <ToDoContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;