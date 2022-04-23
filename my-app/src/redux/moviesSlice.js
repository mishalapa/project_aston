import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async function (value) {
	const response = await axios.get(
		`https://api.simkl.com/search/movie?q=${
			value ? value : ''
		}&client_id=0645e851765e9feedbf2661bd5ec586768f4ff37d84513291536bfe8e1ba2256`
	)
	return response.data
})

export const fetchMovie = createAsyncThunk('movies/fetchMovie', async function (simkl_id) {
	const response = await axios.get(
		`https://api.simkl.com/movies/${simkl_id}?client_id=0645e851765e9feedbf2661bd5ec586768f4ff37d84513291536bfe8e1ba2256&extended=full`
	)

	return response.data
})

const initialState = {
	movies: [],
	favorites: [],
	history: '',
	error: null,
	status: '',
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
				console.log('2')
				state.favorites = state.favorites.filter((movieId) => movieId !== action.payload)
				return
			}
			if (!state.favorites.includes(action.payload)) {
				console.log('1')
				state.favorites = [...state.favorites, action.payload]
			}
		},
		addHistory: (state, action) => {
			state.history = state.history + ',' + action.payload
		},
		removeHistory: (state) => {
			state.history = ''
		},
		loadingHistory: (state, action) => {
			state.history = action.payload
		},
	},
	extraReducers: {
		[fetchMovies.pending]: (state) => {
			state.status = 'loading'
			state.error = null
		},
		[fetchMovies.fulfilled]: (state, action) => {
			state.movies = action.payload
			state.status = 'fulfilled'
		},
		[fetchMovies.rejected]: (state, action) => {
			state.error = action.payload
			state.status = 'rejected'
		},
		[fetchMovie.pending]: (state) => {
			state.status = 'loading'
			state.error = null
		},
		[fetchMovie.fulfilled]: (state, action) => {
			state.movies = action.payload
			state.status = 'fulfilled'
		},
		[fetchMovie.rejected]: (state, action) => {
			state.error = action.payload
			state.status = 'rejected'
		},
	},
})

export const { addFavorites, addHistory, removeHistory, loadingHistory, toggleFavourite } = moviesSlice.actions
export const moviesReducer = moviesSlice.reducer
