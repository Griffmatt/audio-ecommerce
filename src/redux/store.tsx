import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import shoppingCartSlice from './shoppingCartSlice';
import userInfoSlice from './userInfoSlice';


const reducers = combineReducers({
    shoppingCart:shoppingCartSlice,
    userInfo: userInfoSlice
})

const persistConfig = {
    key: 'root',
    storage,
  };

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export default store