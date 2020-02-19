import { authMe } from '../api/api-worker';


const SET_USER_AUTH = "SET_USER_AUTH";
const FETCH_TOGGLE = "FETCH_TOGGLE";

let initialState = {
    id: null,
    email: null,
    login: null,
    isLogged: false,
    isFetching: true
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_AUTH:
            return {
                ...state,
                ...action.userData,
                isLogged: true
            }
        case FETCH_TOGGLE:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const setUserAuth = (id, email, login) => {
    return {
        type: SET_USER_AUTH,
        userData: { id, email, login }
    }
}

export const isFetchingToggle = (isFetching) => {
    return {
        type: FETCH_TOGGLE,
        isFetching
    }
}

export default authReducer;

export const authThunkCreator = (id, email, login) => {
    return (dispatch) => {
        authMe().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setUserAuth(id, email, login));
            }
        });
    }
}