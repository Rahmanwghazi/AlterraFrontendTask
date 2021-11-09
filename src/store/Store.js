import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage  from "redux-persist/lib/storage";
import PengunjungSlice from "./PengunjungSlice";

const reducers = combineReducers({
    pengunjung: PengunjungSlice
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({reducer: persistedReducer})

const persistor = persistStore(store)

export { store, persistor}