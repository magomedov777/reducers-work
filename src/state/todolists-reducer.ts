import { v1 } from "uuid";
import { FilterValuesType, TodolistType } from "../App";

export const TodolistsReducer = (state: TodolistType[], action: MainTypeAction): TodolistType[] => {
  switch (action.type) {
    default:
      return state;
  }
};

export type removeTodolistACType = ReturnType<typeof removeTodolistAC>;
export const removeTodolistAC = (todolistId: string) => {
  return {
    type: "REMOVE-TODOLIST",
    payload: {
      todolistId,
    },
  } as const;
};

export type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>;

export const changeTodolistTitleAC = (todolistID: string, newTitle: string) => {
  return {
    type: "CHANGE-TODOLIST-TITLE",
    payload: {
      todolistID,
      newTitle,
    },
  } as const;
};

export type changeFilterACType = ReturnType<typeof changeFilterAC>;
export const changeFilterAC = (todolistID: string, filterValue: FilterValuesType) => {
  return {
    type: "CHANGE-TODOLIST-FILTER",
    payload: {
      todolistID,
      filterValue,
    },
  } as const;
};
