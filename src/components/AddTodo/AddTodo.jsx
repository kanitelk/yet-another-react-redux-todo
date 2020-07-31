import React from "react";
import "./AddTodo.scss";
import { addTodo } from "../../redux/actions/todoActions";
import { connect } from "react-redux";

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "test todo",
      completed: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    if (event.target.name === "completed") {
      value = event.target.checked;
    }
    this.setState({ [event.target.name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createTodo({
      id: Math.random(),
      completed: this.state.completed,
      title: this.state.value,
    });
    this.setState({ completed: false, value: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="add-todo__form">
        <h3>Add todo</h3>
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
            value={this.state.completed}
            type="checkbox"
          />
        </div>

        <button type="submit">Create</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createTodo: (todo) => dispatch(addTodo(todo)),
});

export default connect(null, mapDispatchToProps)(AddTodo);
