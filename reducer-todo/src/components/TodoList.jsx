import React from 'react';

export default function TodoList({todos, dispatch}) {
    return (
        <div>
        {todos.map(todo => (
          <h3
            className={todo.completed ? "checked" : "unchecked"}
            onClick={event =>
              dispatch({ type: "CHECK", description: event.target.innerHTML })}
          >
            {todo.description}
          </h3>
        ))}
      <button className="clear" onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
        </div>
    )
}
