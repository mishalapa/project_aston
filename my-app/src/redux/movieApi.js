import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
	reducerPath: 'movieApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.simkl.com/' }),
	endpoints: (build) => ({
		getMovies: build.query({
			query: (value) =>
				`search/movie?q=${
					value.charAt(0).toUpperCase() + value.slice(1)
				}&client_id=5892c4006298023ae6d06488f20e27d41fd08ae18055ab42d5bd76b80318ab7d`,
			transformResponse: (response) => response,
		}),
		getMovie: build.query({
			query: (simkl_id) =>
				`/movies/${simkl_id}?client_id=5892c4006298023ae6d06488f20e27d41fd08ae18055ab42d5bd76b80318ab7d&extended=full`,
			transformResponse: (response) => response,
		}),
	}),
})

export const { useGetMoviesQuery, useGetMovieQuery } = movieApi
