import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";

export const rootReducer = todoReducer;

export type RootState = ReturnType<typeof rootReducer>