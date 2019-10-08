import React from "react";

export default function TodoForm({ state, dispatch }) {
  const handleChangeDispatch = event => {
    dispatch({
      type: "ON_INPUT_CHANGE",
      payload: { value: event.target.value }
    });
  };

  const handleSubmitDispatch = event => {
    event.preventDefault();
    console.log(state);
  };
  return (
    <form onSubmit={handleSubmitDispatch}>
      <input
        onChange={handleChangeDispatch}
        type="text"
        placeholder="Enter todos"
      />
      <button onClick={event => dispatch({ type: "ADD", payload: state.form })}>
        Add
      </button>
    </form>
  );
}
