import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async function (value) {
	const response = await axios.get(
		`https://api.simkl.com/search/movie?q=${
			value ? value : ''
		}&client_id=5892c4006298023ae6d06488f20e27d41fd08ae18055ab42d5bd76b80318ab7d`
	)
	return response.data
})

export const fetchMovie = createAsyncThunk('movies/fetchMovie', async function (simkl_id) {
	const response = await axios.get(
		`https://api.simkl.com/movies/${simkl_id}?client_id=5892c4006298023ae6d06488f20e27d41fd08ae18055ab42d5bd76b80318ab7d&extended=full`
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
			state.favorites = action.payload
		},
		addHistory: (state, action) => {
			state.history = state.history + ',' + action.payload
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

export const { addFavorites, addHistory } = moviesSlice.actions
export const moviesReducer = moviesSlice.reducer
