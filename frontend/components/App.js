import React from "react";

import Form from "./Form";
import TodoList from "./TodoList";

const todos = [
  {
    name: "Kaleb",
    id: 123,
    purchased: false,
  },
];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos,
    };
  }

  addTodo = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      purchased: false,
    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newItem],
    });
  };

  toggleTodo = (itemId) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((item) => {
        if (itemId === item.id) {
          return { ...item, purchased: !item.purchased };
        }
        return item;
      }),
    });
  };

  hideCompleted = (e) => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter((item) => !item.purchased),
    });
  };

  render() {
    return (
      <div>
        <div>
          <h2>Todos:</h2>
          <TodoList toggleTodo={this.toggleTodo} todos={this.state.todos} />
        </div>
        <Form addTodo={this.addTodo} />
        <button onClick={this.hideCompleted}>Hide Completed</button>
      </div>
    );
  }
}
