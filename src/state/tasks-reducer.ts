import { v1 } from "uuid";
import { FilterValuesType, TasksStateType, TodolistType } from "../App";
import { addTodolistACType, removeTodolistACType } from "./todolists-reducer";

export type RemoveTaskActionType = ReturnType<typeof removeTaskAC>;
export type AddTaskActionType = ReturnType<typeof addTaskAC>;
export type ChangeTaskStatusActionType = ReturnType<typeof changeTaskStatusAC>;
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
    case "CHANGE-TASK-STATUS":
      return {
        ...state,
        [action.todolistId]: state[action.todolistId].map((el) =>
          el.id === action.taskId ? { ...el, isDone: action.isDone } : el
        ),
      };
    case "CHANGE-TASK-TITLE":
      return {
        ...state,
        [action.todolistId]: state[action.todolistId].map((el) =>
          el.id === action.taskId ? { ...el, title: action.title } : el
        ),
      };
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
