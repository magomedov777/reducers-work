import { v1 } from "uuid";
import { FilterValuesType, TodolistType } from "../App";

export const TodolistsReducer = (state: TodolistType[], action: MainTypeAction): TodolistType[] => {
  switch (action.type) {
    default:
      return state;
  }
};

export type MainTypeAction =
  | removeTodolistACType
  | addTodolistACType
  | changeTodolistTitleACType
  | changeFilterACType
  | addTodolistACType;
