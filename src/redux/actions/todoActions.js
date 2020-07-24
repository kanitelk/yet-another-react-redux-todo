import { TOGGLE_TODO } from "./types";

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});
