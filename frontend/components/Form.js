import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }

  handleChanges = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.setState({ item: "" });
    this.props.addTodo(e, this.state.item);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            name="item"
            value={this.state.item}
            onChange={this.handleChanges}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
