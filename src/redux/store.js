import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { authReducer } from './authSlice';
import { adminReducer } from './adminSlice';

const reducer = combineReducers({
	auth: authReducer,
	admin: adminReducer
});

export const store = configureStore({
	reducer,
});