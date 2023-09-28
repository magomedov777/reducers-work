import { v1 } from "uuid";
import { FilterValuesType, TasksStateType, TodolistType } from "../App";
import { addTodolistACType, removeTodolistACType } from "./todolists-reducer";

export type ChangeTaskTitleActionType = ReturnType<typeof changeTaskTitleAC>;

export type ActionsType =
  | RemoveTaskActionType
  | AddTaskActionType
  | ChangeTaskStatusActionType
  | ChangeTaskTitleActionType
  | addTodolistACType
  | removeTodolistACType;

const initialState: TasksStateType = {};

export const TasksReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case "ADD-TODOLIST":
      return {
        ...state,
        [action.payload.todolistId]: [],
      };
    case "REMOVE-TODOLIST": {
      let copyState = { ...state };
      delete copyState[action.payload.todolistId];
      return copyState;
    }

    default:
      return state;
  }
};

export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string) => {
  return { type: "CHANGE-TASK-STATUS", taskId, isDone, todolistId } as const;
};

export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string) => {
  return { type: "CHANGE-TASK-TITLE", taskId, title, todolistId } as const;
};
