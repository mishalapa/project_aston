import { useCallback, useState } from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import MovieList from '../Main/MovieList'

import { useGetMoviesQuery } from '../../redux/movieApi'

import { addHistory } from '../../redux'
import { debounce } from '../../utility'

import './search.css'
import { useGetValue } from '../../hooks'

export const Search = () => {
	const { id = '' } = useParams()
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [value, setValue] = useState(id)
	const { data = [] } = useGetMoviesQuery(value)
	const isLogin = useGetValue('isLogin')

	const onChange = (event) => {
		setValue(event.target.value)
	}

	const debounceOnChange = useCallback(debounce(onChange), [])

	const onSubmit = () => {
		if (isLogin) {
			dispatch(addHistory(value))
		}
		navigate(`/search/${value}`)
	}

	return (
		<div className='searchPanel'>
			<h1>Поиск фильмов...</h1>
			<form className='searchForm' onSubmit={onSubmit}>
				<input
					className='searchForm__input'
					type='text'
					placeholder='Название фильма или сериала'
					onChange={debounceOnChange}
				/>
			</form>
			<div className='movie__list'>
				{data?.length > 0 ? (
					data.map((movie, id) => {
						return <MovieList movie={movie} key={id} />
					})
				) : (
					<p className='movie__not-found'>Movie not found</p>
				)}
			</div>
		</div>
	)
}
