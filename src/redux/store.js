import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { adminReducer } from './adminSlice';
import { authReducer } from './authSlice';
import { clientReducer } from './clientSlice';
import { groupeReducer } from './groupeSlice';
import { abonnementReducer } from './abonnementSlice';

const reducer = combineReducers({
	auth: authReducer,
	admin: adminReducer,
	client: clientReducer,
	groupe: groupeReducer,
	abonnement: abonnementReducer
});

export const store = configureStore({
	reducer,
});