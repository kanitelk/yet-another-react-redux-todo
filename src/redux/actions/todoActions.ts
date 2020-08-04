import {
  ADD_TODO,
  ADD_TODO_STARTED,
  FETCH_INTITIAL_TODOS_STARTED,
  FETCH_INITIAL_TODOS_FAILED,
  TOGGLE_TODO,
  FETCH_INITIAL_TODOS_SUCCESS,
  Todo,
  GO_TO_PAGE,
} from "./types";
import { getTodos } from "../../services/api";
import { Dispatch, Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers/rootReducer";

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const addTodoStarted = () => ({
  type: ADD_TODO_STARTED,
});

export const addTodoSuccess = (todo: Todo) => ({
  type: ADD_TODO,
});

export const addTodo = (todo: Todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const fetchInitialTodos = () => {
  return (dispatch: Dispatch) => {
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

export const fetchInitialTodosSuccess = (todos: Todo[]) => ({
  type: FETCH_INITIAL_TODOS_SUCCESS,
  payload: todos,
});

export const fetchInitialTodosFailure = (error: string) => ({
  type: FETCH_INITIAL_TODOS_FAILED,
  payload: error,
});

export const goToPage = (page: number) => ({
  type: GO_TO_PAGE,
  payload: page
})