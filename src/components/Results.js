import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Card } from './Card'
import { SimpleModal } from './Modal'

import { API } from '../utils/api'

export const Results = ({ queryString }) => {
	const [items, setItems] = useState({})
	const [page, setPage] = useState(1)

	const getMovies = () => {
		fetch(`https://api.themoviedb.org/3/search/movie?api_key=${ API }&language=en-US&query=${ queryString }&page=${ page }&include_adult=false`)
			.then(res => res.json())
			.then(data => setItems(data))
	}

	useEffect(() => {
		getMovies()
		// eslint-disable-next-line
	}, [queryString, page])

	const handleNextPage = () => {
		setPage(page + 1)
	}
	const handlePrevPage = () => {
		setPage(page - 1)
	}

	return (
		<StyledResults>
			{items.results
				? items.results.map(result =>
					<Card
						key={result.id}
						poster={result.poster_path}
						title={result.title}
						overview={result.overview}
					>
						<SimpleModal>
							<h3>{result.title}</h3>
							<p>{result.overview}</p>
						</SimpleModal>
					</Card>
				)
				: 'Loading...'
			}
			<StyledPagination>
				<button onClick={() => handlePrevPage()}>previous</button>
				<button onClick={() => handleNextPage()}>next</button>
			</StyledPagination>
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

const StyledPagination = styled.ul`
	/*  */
`

Results.propTypes = {
	queryString: PropTypes.string.isRequired,
}
