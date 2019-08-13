import React, { Fragment, useState, useEffect } from 'react'
import { API } from '../utils/api'
import styled from 'styled-components'
import { FaImdb } from 'react-icons/fa'
import { Rating } from './Rating'

export const SingleResult = ({ currentItem, category }) => {
	const [resultData, setResultData] = useState()
	const getSingleResult = id => {
		fetch(`https://api.themoviedb.org/3/${ category }/${ currentItem }?api_key=${ API }&language=en-US`)
			.then(res => res.json())
			.then(data => setResultData(data))
	}

	useEffect(() => {
		currentItem && getSingleResult(currentItem)
		// eslint-disable-next-line
	}, [currentItem])

	return (
		<Fragment>
			{resultData &&
				<StyledResult>
					<StyledPoster>
						<div>
							<img src={`https://image.tmdb.org/t/p/w300${resultData.poster_path || resultData.profile_path}`} alt=""/>
						</div>
					</StyledPoster>
					<div>
						<StyledTitle>{resultData.title || resultData.name}</StyledTitle>
						{resultData.vote_average > 0
							? <Rating rating={resultData.vote_average} />
							: 'No rating'
						}
						{resultData.genres &&
							<div>
								Genre: {resultData.genres.map((genre, i) => [
									i > 0 && ", ",
									`${genre.name}`
								]
								)}
							</div>
						}
						{resultData.known_for_department &&
							<div>Known for: {resultData.known_for_department}</div>
						}
						{resultData.number_of_seasons && <div>{resultData.number_of_seasons} season{resultData.number_of_seasons > 1 && 's'}</div>}
						{resultData.runtime && <div>Runtime: {resultData.runtime} mins</div>}
						<StyledOverview>{resultData.overview || resultData.biography}</StyledOverview>
						{resultData.imdb_id &&
							<a
								href={`https://www.imdb.com/title/${resultData.imdb_id}`}
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
	padding: 4rem 0;
`
const StyledPoster = styled.div`
	min-width: 300px;
	margin-right: 2rem;
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
`

const StyledOverview = styled.p`
	font-size: 1.5rem;
`
