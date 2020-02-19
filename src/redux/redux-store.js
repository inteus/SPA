import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import contentReducer from "./content-reducer";
import dialoguesReducer from "./dialogues-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    contentPage: contentReducer,
    dialoguesPage: dialoguesReducer,
    friendsList: friendsReducer,
    usersList: usersReducer,
    userAuth: authReducer,
    form: formReducer
});

let store = createStore(
    reducers,
    compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    );

export default store;