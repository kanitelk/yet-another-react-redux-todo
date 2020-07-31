import { TOGGLE_TODO, ADD_TODO } from "./types";

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});
