import React from 'react';
import s from '../Dialogs.module.css'
import {Link} from "react-router-dom";
import {DialogType} from "../../Redux/Type"

const DialogItem = (props: DialogType) => {
    return (
        <div className={s.dialog}>
            <Link to={`/dialogs/${props.id}`}>{props.name}</Link>
        </div>
    )
}

export default DialogItem