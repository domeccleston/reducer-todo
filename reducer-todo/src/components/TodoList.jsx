import React from "react";
import moment from 'moment';
import { Button, Card } from 'semantic-ui-react';


export default function TodoList({ state, dispatch }) {
  return (
    <div className="todos-container">
      {state.todos.map(todo => (
        <Card className="todo-card">
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
        {moment(todo.toComplete).diff(moment(todo.id)) < 0 ? <span className="overdue">Overdue!</span> : ""}
        <br></br>
        {`Tags: `}
        </Card>
      ))}
      <Button className="clear" onClick={() => dispatch({ type: "CLEAR" })}>
        Clear
      </Button>
    </div>
  );
}
