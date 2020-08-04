import "./App.scss";

import React from "react";

import AddTodo from "./AddTodo/AddTodo";
import TodoList from "./TodoList/TodoList";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="logo">
          <h2>Yet Another App</h2>
        </div>
      </header>
      <section className="main-section">
        <AddTodo />
        <TodoList />
      </section>
    </div>
  );
}

export default App;
