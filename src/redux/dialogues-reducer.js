const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
const SEND_MESSAGE_TEXT = "SEND-MESSAGE-TEXT";

let initialState = {
    dialogues: [
        { name: "Name#1", id: 1 },
        { name: "Name#2", id: 2 }
    ],
    messages: [
        { id: 1, message: "Just a test message" },
        { id: 2, message: "Another text shenanigans" }
    ],
    newMessageText: ""
}

const dialoguesReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.bodyText
            }

        case SEND_MESSAGE_TEXT:
            let msgBody = state.newMessageText;
            return {
                ...state,
                newMessageText: "",
                messages: [...state.messages, { id: 3, message: msgBody }]
            }

        default:
            return state;
    }
}

export const sendMessageCreator = (text) => {
    return {
        type: SEND_MESSAGE_TEXT,
        msgBody: text
    }
}

export const updateMessageBodyCreator = (text) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        bodyText: text
    }
}

export default dialoguesReducer;