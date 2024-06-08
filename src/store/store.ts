import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import authSlice from './slices/authSlice';
import cartSlice from './slices/cartSlice';

const rootReducers = combineReducers({
    'auth': authSlice,
    'cart': cartSlice
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
    reducer: persistedReducer
});

export const persister = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
