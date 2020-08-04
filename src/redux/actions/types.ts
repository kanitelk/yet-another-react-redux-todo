export const ADD_TODO = "ADD_TODO";
export const ADD_TODO_STARTED = "ADD_TODO_STARTED";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAILED = "ADD_TODO_FAILED";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const FETCH_INTITIAL_TODOS_STARTED = "FETCH_INTITIAL_TODOS_STARTED";
export const FETCH_INITIAL_TODOS_SUCCESS = "FETCH_INITIAL_TODOS_SUCCESS";
export const FETCH_INITIAL_TODOS_FAILED = "FETCH_INITIAL_TODOS_FAILED";
export const GO_TO_PAGE = "GO_TO_PAGE"

export type Todo = {
  id: number;
  userId?: number;
  title: string;
  completed: boolean;
};

export interface TodoState {
  data: Todo[];
  loading: boolean;
  error: null | string;
  currentPage: number;
  perPage: number;
  offset: number;
}
