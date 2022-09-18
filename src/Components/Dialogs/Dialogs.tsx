import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItems/DialogItem";
import Message from "./Message/Message";
import {DialogPageType} from '../Redux/Type'

const Dialogs = (props: DialogPageType) => {


    // Формируем массивы jsx компонент из массивов данных, а зетем
    // вставляем их в разметку

    let dialogsElements = props.dialogs.map(item => {
        return <DialogItem name={item.name} id={item.id}/>
    })

    let messagesElements = props.messages.map(item => {
        return <Message id={item.id} message={item.message} />
    })

// ------фукция добавления сообщений------
    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addMessage = ()=>{
        let userMessage = newMessageElement.current?.value
        alert(userMessage)
    }
    return (
        <>
          <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
        <div><textarea ref={newMessageElement}></textarea></div>
        <button onClick={addMessage}>Send message</button>
        </>
      
    )
}

export default Dialogs