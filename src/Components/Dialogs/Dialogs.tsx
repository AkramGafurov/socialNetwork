import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItems/DialogItem";
import Message from "./Message/Message";
import {MessagePageType} from '../Redux/Type'

const Dialogs = (props: MessagePageType) => {


    // Формируем массивы jsx компонент из массивов данных, а зетем
    // вставляем их в разметку

    let dialogsElements = props.messagePage.dialogs.map((item,index) => {
        return <DialogItem key={index} name={item.name} id={item.id}/>
    })

    let messagesElements = props.messagePage.messages.map((item,index) => {
        return <Message key={index} id={item.id} message={item.message} />
    })

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        props.addMessage()
    }

    const upDateNewUserMessage = () => {
        let userInput = newMessageElement.current?.value
        userInput && props.upDateNewUserMessage(userInput)
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
        <div><textarea value = {props.messagePage.tempMessage} onChange={upDateNewUserMessage} ref={newMessageElement}/></div>
        <button onClick={addMessage}>Send message</button>
        </>
      
    )
}

export default Dialogs