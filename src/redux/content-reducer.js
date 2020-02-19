import { getProfile, updateStatus, getStatus } from '../api/api-worker';

const ADD_POST = "ADD-POST";
const POST_TEXT_CHANGE = "POST_TEXT_CHANGE";
const SET_PROFILE = "SET_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    posts: [
        { ava: "https://static-cdn.jtvnw.net/user-default-pictures-uv/ebb84563-db81-4b9c-8940-64ed33ccfc7b-profile_image-70x70.png", message: "Just a single post" }
    ],
    textAreaPost: "",
    profile: null,
    status: ""
}

const contentReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { ava: "https://static-cdn.jtvnw.net/user-default-pictures-uv/215b7342-def9-11e9-9a66-784f43822e80-profile_image-70x70.png", message: state.textAreaPost }],
                textAreaPost: ""
            }

        case POST_TEXT_CHANGE:
            return {
                ...state,
                textAreaPost: action.onChangeTextArea
            }

        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;

    }
}

export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    }
}

export const onChangeTextAreaCreator = (text) => {

    return {
        type: POST_TEXT_CHANGE,
        onChangeTextArea: text
    }
}

export const setProfile = (profile) => {

    return {
        type: SET_PROFILE,
        profile
    }
}

export const setStatus = (status) => {

    return {
        type: SET_STATUS,
        status
    }
}

export default contentReducer;

export const getProfileThunkCreator = (userId) => {
    return (dispatch) => {
        getProfile(userId).then(response => {
            dispatch(setProfile(response.data));
        });
    }
}

export const getStatusThunkCreator = (userId) => {
    return (dispatch) => {
        getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        });
    }
}

export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
    }
}