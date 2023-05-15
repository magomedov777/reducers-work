import { v1 } from "uuid";
import { FilterValuesType, TodolistType } from "../App"

export const TodolistsReducer = (state: TodolistType[], action: MainTypeAction): TodolistType[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(el => el.id !== action.payload.todolistId)
        }
        case 'ADD-TODOLIST': {
            let newTodolistId = v1();
            let newTodolist: TodolistType = {id: newTodolistId, title: action.payload.newTitle, filter: 'all'};
                return [...state, newTodolist]
        }
        case "CHANGE-TODOLIST-TITLE": {
            return state.map(el => el.id === action.payload.todolistID ? {...el, title: action.payload.newTitle} : el)
        }
        case "CHANGE-TODOLIST-FILTER": {
            return state.map(el => el.id === action.payload.todolistID ? {...el, filter: action.payload.filterValue} : el)
        }
        default: return state
    }
}

type MainTypeAction = removeTodolistACType 
| addTodolistACType 
| changeTodolistTitleACType 
| changeFilterACType

type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todolistId: string) => {
    return {
        type: 'REMOVE-TODOLIST',
         payload: {
            todolistId
         }
    } as const
}

type addTodolistACType = ReturnType<typeof addTodolistAC>

export const addTodolistAC = (newTitle: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            newTitle
        }
        
    }as const
}

type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>

export const changeTodolistTitleAC = (todolistID: string, newTitle: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            todolistID, newTitle

        }
        
    }as const
}

type changeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (todolistID: string, filterValue: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {
            todolistID, filterValue
        }
        
    }as const
}