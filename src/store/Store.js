import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage  from "redux-persist/lib/storage";
import  TodoListSlice from "./TodoListSlice";

const reducers = combineReducers({
    todoList: TodoListSlice
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({reducer: persistedReducer})

const persistor = persistStore(store)

export { store, persistor}