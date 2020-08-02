import {
  ADD_TODO,
  ADD_TODO_STARTED,
  FETCH_INITIAL_TODOS_SUCCESS,
  FETCH_INTITIAL_TODOS_STARTED,
  FETCH_INITIAL_TODOS_FAILED,
  TOGGLE_TODO,
} from "./types";
import { getTodos } from "../../services/api";

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const addTodoStarted = () => ({
  type: ADD_TODO_STARTED,
});

export const addTodoSuccess = (todo) => ({
  type: ADD_TODO,
});

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const fetchInitialTodos = () => {
  return (dispatch) => {
    dispatch(fetchInitialTodosStarted());

    getTodos()
      .then((res) => {
        dispatch(fetchInitialTodosSuccess(res.data));
      })
      .catch((err) => dispatch(fetchInitialTodosFailure(err)));
  };
};

export const fetchInitialTodosStarted = () => ({
  type: FETCH_INTITIAL_TODOS_STARTED,
});

export const fetchInitialTodosSuccess = (todos) => ({
  type: FETCH_INITIAL_TODOS_SUCCESS,
  payload: todos,
});

export const fetchInitialTodosFailure = (error) => ({
  type: FETCH_INITIAL_TODOS_FAILED,
  payload: error,
});
