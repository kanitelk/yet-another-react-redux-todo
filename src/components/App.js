import React from "react";
import "./App.scss";
import TodoList from "./TodoList/TodoList";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="logo">
          <h2>Todo App</h2>
        </div>
      </header>
      <section className="main-section">
        <TodoList />
      </section>
    </div>
  );
}

export default App;
