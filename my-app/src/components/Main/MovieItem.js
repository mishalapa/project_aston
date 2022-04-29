import { Card } from 'antd'
import React, { useState } from 'react'
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import './Movies.css'
import { toggleFavourite } from '../../redux'
import { useGetMovieQuery } from '../../redux/movieApi'
import { useGetValue } from '../../hooks'

const { Meta } = Card

export const MovieItem = () => {
	const { simkl_id } = useParams()
	const dispatch = useDispatch()
	const favorites = useGetValue('favorites')

	const { data = [] } = useGetMovieQuery(simkl_id)
	const image = `https://simkl.in/posters/${data.poster}_m.jpg`

	const [like, setLike] = useState(favorites.includes(+simkl_id))

	function toogle() {
		setLike(!like)
		dispatch(toggleFavourite(+simkl_id))
	}

	return (
		<Card hoverable className='movie__card' cover={<img alt='example' src={image} className='movie__poster' />}>
			<Meta title={'Title: ' + data.title} />
			<Meta title={'Year: ' + data.year} />
			<Meta className='movie__overview' title={'Overview: ' + data.overview} />
			{like ? (
				<AiTwotoneHeart onClick={toogle} className='heart' />
			) : (
				<AiOutlineHeart onClick={toogle} className='heart' />
			)}
		</Card>
	)
}
