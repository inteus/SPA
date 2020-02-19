import { getUsers, followUser, unfollowUser } from '../api/api-worker';

const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const FETCH_TOGGLE = "FETCH_TOGGLE";
const FOLLOW_BUTTON_STATUS = "FOLLOW_BUTTON_STATUS";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    buttonInProgress: [],
    isFetching: true
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case FETCH_TOGGLE:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case FOLLOW_BUTTON_STATUS:
            return {
                ...state,
                buttonInProgress: action.buttonInProgress ?
                    [...state.buttonInProgress, action.userID]
                    :
                    state.buttonInProgress.filter(id => id !== action.userID)
            }
        default:
            return state;
    }
}

// actions

export const follow = (userID) => {
    return {
        type: FOLLOW_USER,
        userID
    }
}

export const unfollow = (userID) => {
    return {
        type: UNFOLLOW_USER,
        userID
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setTotalUserCount = (count) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count
    }
}

export const isFetchingToggle = (isFetching) => {
    return {
        type: FETCH_TOGGLE,
        isFetching
    }
}

export const isButtonProgress = (buttonInProgress, userID) => {
    return {
        type: FOLLOW_BUTTON_STATUS,
        buttonInProgress,
        userID
    }
}

export default usersReducer;

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(isFetchingToggle(true));
        getUsers(currentPage, pageSize).then(data => {
            dispatch(isFetchingToggle(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUserCount(data.totalCount));
            dispatch(setCurrentPage(currentPage));
        });
    }
}

export const followUserThunkCreator = (userID) => {
    return (dispatch) => {
        dispatch(isButtonProgress(true, userID));
        followUser(userID).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userID));
            }
            dispatch(isButtonProgress(false, userID));
        });
    }
}

export const unfollowUserThunkCreator = (userID) => {
    return (dispatch) => {
        dispatch(isButtonProgress(true, userID));
        unfollowUser(userID).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(userID));
            }
            dispatch(isButtonProgress(false, userID));
        });
    }
}


