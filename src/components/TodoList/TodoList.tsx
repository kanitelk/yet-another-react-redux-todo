import React from "react";
import { connect } from "react-redux";

import { fetchInitialTodos, toggleTodo } from "../../redux/actions/todoActions";
import { Todo } from "../../redux/actions/types";
import { RootState } from "../../redux/reducers/rootReducer";
import TodoItem from "./TodoItem";
import Pagination from "./Pagination";

class TodoList extends React.Component<Props> {
  componentDidMount() {
    this.props.getInitialTodos();
  }

  renderTodos = (): Array<React.Component> =>
    this.props.todos.map((item: Todo) => (
      <TodoItem
        toggler={() => this.props.toggleTodo(item.id)}
        key={item.id}
        id={item.id}
        title={item.title}
        completed={item.completed}
      />
    ));

  render() {
    return (
      <>
        <h2>Todo List ({this.props.todos.length})</h2>
        <Pagination perPage={5} data={this.renderTodos()} wrapperClass={`todo-list`} />
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  todos: state.data,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id)),
  getInitialTodos: () => dispatch(fetchInitialTodos()),
});

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
