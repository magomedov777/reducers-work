import React, { ChangeEvent } from 'react'

type PropsType = {
    callBack: (newIsDone: boolean) => void
    isDone: boolean
}

export const SuperCheckbox = (props: PropsType) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.callBack(event.currentTarget.checked)
    }
    return (
        <input type="checkbox" checked={props.isDone} onChange={onChangeHandler} />
    )
}
