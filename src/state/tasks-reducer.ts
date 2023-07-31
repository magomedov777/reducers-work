import { v1 } from "uuid";
import { FilterValuesType, TasksStateType, TodolistType } from "../App"
import { addTodolistACType, removeTodolistACType } from "./todolists-reducer";


export type RemoveTaskActionType = ReturnType<typeof removeTaskAC>
export type AddTaskActionType = ReturnType<typeof addTaskAC>
export type ChangeTaskStatusActionType = ReturnType<typeof changeTaskStatusAC>
export type ChangeTaskTitleActionType = ReturnType<typeof changeTaskTitleAC>



export type ActionsType = RemoveTaskActionType
| AddTaskActionType 
| ChangeTaskStatusActionType 
| ChangeTaskTitleActionType 
| addTodolistACType 
|removeTodolistACType
 
const initialState: TasksStateType = {} 
  
export const TasksReducer = (state = initialState, action: ActionsType) => {
    switch(action.type) {
        case 'REMOVE-TASK' : 
            return { 
                ...state,[action.todolistId]:state[action.todolistId].filter(t => t.id !== action.taskId)
            }
        case 'ADD-TASK' : 
        return {
            ...state,[action.todolistId]:[{id: v1(), title: action.title, isDone: false}, ...state[action.todolistId]]
        }  
        case 'CHANGE-TASK-STATUS' : 
        return {
            ...state,[action.todolistId]:state[action.todolistId].map(el => el.id === action.taskId ? {...el, isDone: action.isDone} : el)
        }  
        case 'CHANGE-TASK-TITLE' : 
        return {
            ...state,[action.todolistId]:state[action.todolistId].map(el => el.id === action.taskId ? {...el, title: action.title} : el)
        }
        case 'ADD-TODOLIST' : 
        return {
            ...state,[action.payload.todolistId]:[]
        }  
        case 'REMOVE-TODOLIST': {
            let copyState = {...state}
            delete copyState[action.payload.todolistId]
        }
       
        default: return state
    }
}

export const removeTaskAC = (taskId: string, todolistId: string) => {
    return {type: 'REMOVE-TASK', taskId, todolistId}as const
}

export const addTaskAC = (title: string, todolistId: string) => {
    return{type: 'ADD-TASK', title, todolistId }as const
}

export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string) => {
    return {type: 'CHANGE-TASK-STATUS', taskId, isDone, todolistId}as const
}

export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string) => {
    return {type: 'CHANGE-TASK-TITLE', taskId, title, todolistId}as const
}


