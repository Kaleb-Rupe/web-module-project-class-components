import React from "react";

const Todo = (props) => {
  return (
    <div
      className={`item${props.item.purchased ? " purchased" : ""}`}
      onClick={() => props.toggleTodo(props.item.id)}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Todo;
