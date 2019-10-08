import React from "react";
import moment from 'moment'

export default function TodoList({ state, dispatch }) {
  const a = moment(state.todos[0].id)
  const b = moment(state.todos[0].toComplete)
  console.log(a.diff(b, 'hours'))
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
        {!todo.completed && `Added: ${todo.id}. To complete by: ${todo.toComplete}`}</h3>
        {moment(todo.toComplete).diff(moment(todo.id)) < 0 ? "Overdue!" : ""}
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
