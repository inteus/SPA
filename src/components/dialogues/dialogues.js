import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './dialogues.module.css';

const Dialogue = (props) => {
    let link = "/dialogues/" + props.id;

    return (
        <div className={styles.dial + ' ' + styles.active}>
            <NavLink to={link}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={styles.message}>
            {props.text}
        </div>
    );
}

const Dialogues = (props) => {

    const { dialogues, messages, newMessageText } = props.dialoguesPage

    let DialoguesElem = dialogues.map(name => <Dialogue name={name.name} id={name.id} key={name.id} />
    );

    let MessageElem = messages.map(msg => <Message text={msg.message} key={msg.id} />
    );

    let newMessageBody = newMessageText;

    let updateMessageText = (e) => {
        props.updateMessageBody(e.target.value);
    }

    let sendMessageText = () => {
        props.sendMessage();
    }

    return (
        <div className={styles.dials}>
            <div className={styles.list}>
                {DialoguesElem}
            </div>
            <div>
                {MessageElem}
            </div>
            <div>
                <textarea
                    value={newMessageBody}
                    onChange={updateMessageText}
                    placeholder="Enter your message here..."
                />
                <button onClick={sendMessageText} className={styles.myButton}>Send</button>
            </div>
        </div>
    );
}

export default Dialogues;