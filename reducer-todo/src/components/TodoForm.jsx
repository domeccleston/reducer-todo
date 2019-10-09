import React from "react";
import { Input, Button } from "semantic-ui-react";

export default function TodoForm({ state, dispatch }) {
  const handleChangeDispatch = event => {
    dispatch({
      type: "ON_INPUT_CHANGE",
      payload: { value: event.target.value }
    });
  };

  const handleSubmitDispatch = event => {
    if (state.form === "") {
      event.preventDefault()
    } else {
    event.preventDefault();
    dispatch({ type: "ADD", payload: state.form })
    console.log(state)
    }
  };
  return (
    <form onSubmit={handleSubmitDispatch}>
      <Input
        onChange={handleChangeDispatch}
        type="text"
        placeholder="Enter todos"
      />
      <Input
        icon="tags"
        iconPosition="left"
        label={{ tag: true, content: "Add Tag" }}
        labelPosition="right"
        placeholder="Enter tags"
      />
      <Button className ="add-button">
        Add
      </Button>
    </form>
  );
}
