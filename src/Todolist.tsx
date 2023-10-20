import React, { ChangeEvent, FC } from 'react';
import { FilterValuesType } from './App';
import { AddItemForm } from './AddItemForm';
import { EditableSpan } from './EditableSpan';
import IconButton from '@mui/material/IconButton/IconButton';
import { Delete } from "@mui/icons-material";
import { Button, Checkbox } from "@mui/material";
import { SuperCheckbox } from './SuperCheckbox';


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type Props = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    filter: FilterValuesType
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
}

export const Todolist: FC<Props> = ({ id, title, tasks, removeTask,
    changeFilter, addTask, changeTaskStatus,
    removeTodolist, changeTodolistTitle,
    filter, changeTaskTitle }) => {
    const addTaskCallback = (title: string) => {
        addTask(title, id);
    }

    const removeTodolistCallback = () => {
        removeTodolist(id);
    }
    const changeTodolistTitleCallback = (title: string) => {
        changeTodolistTitle(id, title);
    }

    const onAllClickHandler = () => changeFilter("all", id);
    const onActiveClickHandler = () => changeFilter("active", id);
    const onCompletedClickHandler = () => changeFilter("completed", id);

    const onChangeHandler = (tID: string, newIsDone: boolean) => {
        changeTaskStatus(tID, newIsDone, id);
    }

    return <div>
        <h3> <EditableSpan value={title} onChange={removeTodolistCallback} />
            <IconButton onClick={removeTodolistCallback}>
                <Delete />
            </IconButton>
        </h3>
        <AddItemForm addItem={addTaskCallback} />
        <div>
            {
                tasks.map(t => {
                    const onClickHandler = () => removeTask(t.id, id)

                    const onTitleChangeHandler = (newValue: string) => {
                        changeTaskTitle(t.id, newValue, id);
                    }


                    return <div key={t.id} className={t.isDone ? "is-done" : ""}>
                        <SuperCheckbox callBack={(newIsDone) => onChangeHandler(t.id, newIsDone)} isDone={t.isDone} />
                        <EditableSpan value={t.title} onChange={onTitleChangeHandler} />
                        <IconButton onClick={onClickHandler}>
                            <Delete />
                        </IconButton>
                    </div>
                })
            }
        </div>
        <div>
            <Button variant={filter === 'all' ? 'outlined' : 'text'}
                onClick={onAllClickHandler}
                color={'inherit'}
            >All
            </Button>
            <Button variant={filter === 'active' ? 'outlined' : 'text'}
                onClick={onActiveClickHandler}
                color={'primary'}>Active
            </Button>
            <Button variant={filter === 'completed' ? 'outlined' : 'text'}
                onClick={onCompletedClickHandler}
                color={'secondary'}>Completed
            </Button>
        </div>
    </div>
}


