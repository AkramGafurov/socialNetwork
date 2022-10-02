import React from 'react';
import s from '../Dialogs.module.css'
import {UserMessageType} from "../../Redux/Type"

const Message = (props: UserMessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message