import React, { Fragment, useState, useEffect } from 'react'
import { API } from '../utils/api'
import styled from 'styled-components'
import { FaImdb } from 'react-icons/fa'
import { Rating } from './Rating'

export const Movie = ({ currentItem }) => {
	const [movie, setMovie] = useState()
	const getMovie = id => {
		fetch(`https://api.themoviedb.org/3/movie/${ currentItem }?api_key=${ API }&language=en-US`)
			.then(res => res.json())
			.then(data => setMovie(data))
	}

	useEffect(() => {
		currentItem && getMovie(currentItem)
		// eslint-disable-next-line
	}, [currentItem])

	return (
		<Fragment>
			{movie &&
				<StyledMovie>
					<StyledPoster>
						<div>
							<img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt=""/>
						</div>
					</StyledPoster>
					<div>
						<StyledTitle>{movie.title}</StyledTitle>
						<Rating rating={movie.vote_average} />
						<div>
							Genre: {movie.genres.map((genre, i) => [
								i > 0 && ", ",
								`${genre.name}`
							]
							)}
						</div>
						<div>Runtime: {movie.runtime} mins</div>
						<StyledOverview>{movie.overview}</StyledOverview>
						<a
							href={`https://www.imdb.com/title/${movie.imdb_id}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaImdb size={48} color="black"/>
						</a>
					</div>
				</StyledMovie>
			}
		</Fragment>
	)
}

const StyledMovie = styled.div`
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
