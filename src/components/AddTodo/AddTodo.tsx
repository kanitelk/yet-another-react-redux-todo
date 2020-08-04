import React, { ChangeEvent, FormEvent } from "react";
import "./AddTodo.scss";
import { addTodo } from "../../redux/actions/todoActions";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Todo } from "../../redux/actions/types";

export class AddTodo extends React.Component<Props> {
  state = {
    value: "test todo",
    completed: false,
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value: string | boolean = event.target.value;
    if (event.target.name === "completed") {
      value = event.target.checked;
    }
    this.setState({ [event.target.name]: value });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.createTodo({
      id: Math.random(),
      completed: this.state.completed,
      title: this.state.value,
    });
    this.setState({ completed: false, value: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="add-todo__form">
        <h2>Add todo</h2>
        <div className="form-item">
          <label>Title</label>
          <input
            name="value"
            onChange={this.handleChange}
            value={this.state.value}
            type="text"
          />
        </div>
        <div className="form-item">
          <label>Completed</label>
          <input
            name="completed"
            onChange={this.handleChange}
            type="checkbox"
          />
        </div>

        <button disabled={this.state.value.length < 3} type="submit">
          Create
        </button>
      </form>
    );
  }
}

type Props = ReturnType<typeof mapDispatchToProps>

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createTodo: (todo: Todo) => dispatch(addTodo(todo)),
});

export default connect(null, mapDispatchToProps)(AddTodo);
