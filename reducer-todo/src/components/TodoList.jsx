import React from "react";
import moment from 'moment'

export default function TodoList({ state, dispatch }) {
  return (
    <div>
      {state.todos.map(todo => (
        <>
        <h3
          className={todo.completed ? "checked" : "unchecked"}
          onClick={event =>
            dispatch({ type: "CHECK", description: event.target.innerHTML })
          }
        >
          {todo.description}
        </h3>
        <h3>
        {' added: '}
        {todo.id}
        {' , to complete by: '}
        {todo.toComplete}</h3>
        </>
      ))}
      <button className="clear" onClick={() => dispatch({ type: "CLEAR" })}>
        Clear
      </button>
{/*       {state.todos.map(todo => {
        return <h3>{moment(new Date()).calendar()}</h3>
      }
      )} */}
    </div>
  );
}
