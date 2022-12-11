import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { abonnementReducer } from './abonnementSlice';
import { activiteReducer } from './activiteSlice';
import { adminReducer } from './adminSlice';
import { authReducer } from './authSlice';
import { clientReducer } from './clientSlice';
import { partitionReducer } from './partitionSlice';
import { pavillonReducer } from './pavillonSlice';
import { transactionReducer } from './transactionSlice';
import { typeInstallationReducer } from './typeInstallationSlice';
import { zoneReducer } from './zoneSlice';

const reducer = combineReducers({
	auth: authReducer,
	admin: adminReducer,
	client: clientReducer,
	zone: zoneReducer,
	abonnement: abonnementReducer,
	activite: activiteReducer,
	partition: partitionReducer,
	type_installation: typeInstallationReducer,
	pavillon: pavillonReducer,
	transaction: transactionReducer
});

export const store = configureStore({
	reducer,
});