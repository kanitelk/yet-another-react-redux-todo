import {
  ADD_TODO,
  TOGGLE_TODO,
  FETCH_INTITIAL_TODOS_STARTED,
  FETCH_INITIAL_TODOS_SUCCESS,
  FETCH_INITIAL_TODOS_FAILED,
} from "../actions/types";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

export const todoReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};
