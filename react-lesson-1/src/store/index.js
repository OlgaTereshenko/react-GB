import {createStore} from 'redux';
import { combineReducers } from 'redux';
import {profileReducer} from "../store/profile/reducer";
import {messagesReducer} from "../store/messages/reducer";
import {chatsReducer} from "../store/chats/reducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    chats: chatsReducer,
});

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )