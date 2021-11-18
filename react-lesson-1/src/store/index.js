import {createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import storage from "redux-persist/lib/storage";
import {persistStore, persistReducer} from "redux-persist";
import {profileReducer} from "../store/profile/reducer";
import {messagesReducer} from "../store/messages/reducer";
import {chatsReducer} from "../store/chats/reducer";

const persistConfig = {
    key: 'root',
    storage
};

const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    chats: chatsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistedReducer,
    composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);