import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { moviesReducer } from './moviesSlice'
import loginSlice from './loginSlice'
import { movieApi } from '.'

import typeAndTime from './middleware/typeAndTime'

const rootReducer = combineReducers({
	login: loginSlice,
	movies: moviesReducer,
	[movieApi.reducerPath]: movieApi.reducer,
})

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(movieApi.middleware, typeAndTime),
})

export const persistor = persistStore(store)
export default store
