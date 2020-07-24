import React from "react";
import TodoItem from "./TodoItem";
import Test from "../Test";
import { connect } from "react-redux";
import { toggleTodo } from "../../redux/actions/todoActions";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleTodo(id) {
    console.log(id);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      }),
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="todo-list">
        <h2>Todo List</h2>
        {this.props.todos ? this.props.todos.map((item) => (
          <TodoItem
            toggler={() => this.props.toggleTodo(item.id)}
            key={item.id}
            id={item.id}
            title={item.title}
            completed={item.completed}
          />
        )) : 'undef'}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
