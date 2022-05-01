import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	favorites: [],
	history: '',
}

const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		addFavorites: (state, action) => {
			state.favorites = [...state.favorites, action.payload]
		},
		toggleFavourite: (state, action) => {
			if (state.favorites.includes(action.payload)) {
				state.favorites = state.favorites.filter((movieId) => movieId !== action.payload)
				return
			}
			if (!state.favorites.includes(action.payload)) {
				state.favorites = [...state.favorites, action.payload]
			}
		},
		addHistory: (state, action) => {
			state.history = state.history + ',' + action.payload
		},
		removeHistory: (state) => {
			state.history = ''
		},
		removeFavorite: (state) => {
			state.favorites = []
		},
		loadingHistory: (state, action) => {
			state.history = action.payload
		},
		loadingFavorite: (state, action) => {
			state.favorites = action.payload
		},
	},
})

export const {
	addFavorites,
	addHistory,
	removeHistory,
	loadingHistory,
	toggleFavourite,
	removeFavorite,
	loadingFavorite,
} = moviesSlice.actions

export const moviesReducer = moviesSlice.reducer
