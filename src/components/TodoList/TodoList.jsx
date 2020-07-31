import React from "react";
import TodoItem from "./TodoItem";
import Test from "../Test";
import { connect } from "react-redux";
import { toggleTodo } from "../../redux/actions/todoActions";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
