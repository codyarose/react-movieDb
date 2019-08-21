import React, { Fragment } from 'react'
import styled from 'styled-components'
import { FaImdb } from 'react-icons/fa'
import { Rating } from './Rating'
import { useAPI } from '../utils/getContent'

export const SingleResult = ({ currentItem, category }) => {
	const [results, error] = useAPI('loadMoviesById', category, currentItem)

	if (error) {
		return <div>{error.message}</div>
	}
	return (
		<Fragment>
			{results &&
				<StyledResult>
					<StyledPoster>
						<div>
							<img src={`https://image.tmdb.org/t/p/w300${results.poster_path || results.profile_path}`} alt=""/>
						</div>
					</StyledPoster>
					<div>
						<StyledTitle>{results.title || results.name}</StyledTitle>
						{results.vote_average > 0
							? <Rating rating={results.vote_average} />
							: 'No rating'
						}
						{results.genres &&
							<div>
								Genre: {results.genres.map((genre, i) => [
									i > 0 && ", ",
									`${genre.name}`
								]
								)}
							</div>
						}
						{results.known_for_department &&
							<div>Known for: {results.known_for_department}</div>
						}
						{results.number_of_seasons && <div>{results.number_of_seasons} season{results.number_of_seasons > 1 && 's'}</div>}
						{results.runtime && <div>Runtime: {results.runtime} mins</div>}
						<StyledOverview>{results.overview || results.biography}</StyledOverview>
						{results.imdb_id &&
							<a
								href={`https://www.imdb.com/title/${results.imdb_id}`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaImdb size={48} color="black"/>
							</a>
						}
					</div>
				</StyledResult>
			}
		</Fragment>
	)
}

const StyledResult = styled.div`
	display: flex;
	padding: 4rem 1rem;
	color: ${props => props.theme.color};
	@media screen and (max-width: 48em) {
		flex-wrap: wrap;
	}
`
const StyledPoster = styled.div`
	min-width: 300px;
	margin-right: 2rem;
	margin-bottom: 2rem;
	@media screen and (max-width: 48em) {
		margin: 0 auto 2rem;
	}
	& > div {
		position: relative;
		width: 100%;
		height: 0;
		padding-top: 150%;
	}
	img {
		position: absolute;
		top: 0;
		left: 0;
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
`

const StyledTitle = styled.h1`
	font-size: 4rem;
	margin: 0;
	@media screen and (max-width: 48em) {
		font-size: 3rem;
	}
`

const StyledOverview = styled.p`
	font-size: 1.5rem;
`
