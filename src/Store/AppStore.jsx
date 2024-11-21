import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './CartSlice';
import UserSlice from './UserSlice';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux';
import { version } from 'react';
const persistConfig = {
    key: 'root',
    version:1,
    storage,
  }
const reducer=combineReducers({
    CartSlice,
    UserSlice,

})
const persistedReducer = persistReducer(persistConfig,reducer)
const AppStore=configureStore({
        reducer:persistedReducer,
})
export default AppStore;