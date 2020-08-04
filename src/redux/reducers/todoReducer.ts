import {
  ADD_TODO,
  TOGGLE_TODO,
  FETCH_INTITIAL_TODOS_STARTED,
  FETCH_INITIAL_TODOS_SUCCESS,
  FETCH_INITIAL_TODOS_FAILED,
  TodoState,
  GO_TO_PAGE,
} from "../actions/types";

const initialState: TodoState = {
  data: [],
  loading: false,
  error: null,
  currentPage: 0,
  offset: 0,
  perPage: 5
};

export const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, data: [...state.data, action.payload] };
    case TOGGLE_TODO:
      return {
        ...state,
        data: state.data.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case FETCH_INTITIAL_TODOS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_INITIAL_TODOS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    }
    case FETCH_INITIAL_TODOS_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case GO_TO_PAGE: {
      return {
        ...state,
        page: action.payload
      }
    }
    default:
      return state;
  }
};
