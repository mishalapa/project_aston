import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID

export const movieApi = createApi({
	reducerPath: 'movieApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.simkl.com/' }),
	endpoints: (build) => ({
		getMovies: build.query({
			query: (value) => `search/movie?q=${value.charAt(0).toUpperCase() + value.slice(1)}&client_id=${CLIENT_ID}`,
			transformResponse: (response) => response,
		}),
		getMovie: build.query({
			query: (simkl_id) => `/movies/${simkl_id}?client_id=${CLIENT_ID}&extended=full`,
			transformResponse: (response) => response,
		}),
	}),
})

export const { useGetMoviesQuery, useGetMovieQuery } = movieApi
