import React from "react";
import { connect } from "react-redux";

import { fetchInitialTodos, toggleTodo } from "../../redux/actions/todoActions";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getInitialTodos();
  }

  render() {
    return (
      <div className="todo-list">
        <h2>Todo List</h2>
        {this.props.loading ? (
          <p>loading...</p>
        ) : (
          this.props.todos.map((item) => (
            <TodoItem
              toggler={() => this.props.toggleTodo(item.id)}
              key={item.id}
              id={item.id}
              title={item.title}
              completed={item.completed}
            />
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.data,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  getInitialTodos: () => dispatch(fetchInitialTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
