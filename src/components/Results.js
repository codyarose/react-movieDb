import React from 'react'
import PropTypes from 'prop-types'
import Async from 'react-async'
import styled from 'styled-components'
import { getMovies } from '../utils/getContent'
import { Card } from './Card'
import { SimpleModal } from './Modal'

export const Results = ({ queryString }) => {

	const loadMovies = () => {
		return getMovies(queryString)
	}

	return (
		<StyledResults>
			<Async promiseFn={loadMovies}>
				<Async.Loading>Loading...</Async.Loading>
				<Async.Fulfilled>
					{data => {
						return (
							data.results.map(result => (
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
							))
						)
					}}
				</Async.Fulfilled>
				<Async.Rejected>
					{error => `Something went wrong: ${error.message}`}
				</Async.Rejected>
			</Async>
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
