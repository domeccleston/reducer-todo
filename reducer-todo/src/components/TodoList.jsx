import React from "react";
import moment from 'moment'

export default function TodoList({ state, dispatch }) {
  console.log(state.todos.map(todo => todo.id))
  return (
    <div>
      {state.todos.map(todo => (
        <h3
          className={todo.completed ? "checked" : "unchecked"}
          onClick={event =>
            dispatch({ type: "CHECK", description: event.target.innerHTML })
          }
        >
          {todo.description}
          {' '}
          {todo.id}
        </h3>
      ))}
      <button className="clear" onClick={() => dispatch({ type: "CLEAR" })}>
        Clear
      </button>
    </div>
  );
}
