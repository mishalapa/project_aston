import { Card } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import './Movies.css'
import { ReactComponent as Logo } from '../../image/heard3.svg'
import { fetchMovie } from '../../redux'

const { Meta } = Card

export const MovieItem = () => {
	const { simkl_id } = useParams()
	const movies = useSelector((state) => state.movies.movies)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchMovie(simkl_id))
	}, [])
	const image = `https://simkl.in/posters/${movies.poster}_m.jpg`
	return (
		<Card hoverable className='movie__card' cover={<img alt='example' src={image} className='movie__poster' />}>
			<Meta title={'Title: ' + movies.title} />
			<Meta title={'Year: ' + movies.year} />
			<Meta className='movie__overview' title={'Overview: ' + movies.overview} />
			<Logo className='favorites__icon' height={'100px'} />
		</Card>
	)
}
