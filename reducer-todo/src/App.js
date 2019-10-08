import React, { useReducer } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import moment from 'moment'

const initialState = {
  todos: [
    {
      description: "mow the lawn",
      id: 1,
      completed: false,
      toComplete: moment(new Date()).add(1, 'days').calendar()
    },
    {
      description: "wash the dishes",
      id: 2,
      completed: false,
      toComplete: moment(new Date()).add(2, 'days').calendar()
    },
    {
      description: "tidy your room",
      id: 3,
      completed: false,
      toComplete: moment(new Date()).add(1, 'days').calendar()
    }
  ],
  form: {
    text: ""
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [
          ...state.todos,
          { description: action.payload, id: new moment().format('MMM Do YY, hh:mm a'), completed: false }
        ]
      };
    case "DELETE":
      return state.todos.filter(
        todo => todo.description !== action.description
      );
    case "CHECK":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.description === action.description) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        })
      };
    case "CLEAR":
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return !todo.completed;
        })
      };
    case "ON_INPUT_CHANGE":
      return {
        ...state,
        form: action.payload.value
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>useReducer Todo List</h1>
      <TodoForm state={state} dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
