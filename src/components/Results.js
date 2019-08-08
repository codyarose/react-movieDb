import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MediaCard } from './Card'
import { API } from '../utils/api'

export const Results = ({ queryString, setPage, callback }) => {
	const [items, setItems] = useState({})

	const getMovies = () => {
		fetch(`https://api.themoviedb.org/3/search/movie?api_key=${ API }&language=en-US&query=${ queryString }&page=${ setPage }&include_adult=false`)
			.then(res => res.json())
			.then(data => setItems(data))
	}

	useEffect(() => {
		getMovies()
		// eslint-disable-next-line
	}, [queryString, setPage])

	useEffect(() => {
		items && callback(items.total_pages)
	})

	return (
		<StyledResults>
			{items.results
				? items.results.map(result =>
					<MediaCard
						key={result.id}
						poster={result.poster_path}
						title={result.title}
						overview={result.overview}
					>
					</MediaCard>
				)
				: 'Loading...'
			}
		</StyledResults>
	)
}

const StyledResults = styled.div`
	max-width: 1365px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
	grid-gap: 2rem 1rem;
	padding: 2rem;
`

Results.propTypes = {
	queryString: PropTypes.string.isRequired,
}
