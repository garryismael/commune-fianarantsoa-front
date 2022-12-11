import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { abonnementReducer } from './abonnementSlice';
import { activiteReducer } from './activiteSlice';
import { adminReducer } from './adminSlice';
import { authReducer } from './authSlice';
import { categorieActiviteReducer } from './categorieActiviteSlice';
import { clientReducer } from './clientSlice';
import { partitionReducer } from './partitionSlice';
import { pavillonReducer } from './pavillonSlice';
import { statsReducer } from './statsSlice';
import { transactionReducer } from './transactionSlice';
import { typeInstallationReducer } from './typeInstallationSlice';
import { zoneReducer } from './zoneSlice';

const reducer = combineReducers({
	abonnement: abonnementReducer,
	activite: activiteReducer,
	admin: adminReducer,
	auth: authReducer,
	categorie_activite: categorieActiviteReducer,
	client: clientReducer,
	partition: partitionReducer,
	pavillon: pavillonReducer,
	transaction: transactionReducer,
	type_installation: typeInstallationReducer,
	zone: zoneReducer,
	stats: statsReducer
});

export const store = configureStore({
	reducer,
});