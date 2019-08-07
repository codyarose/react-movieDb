import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MdBrokenImage } from 'react-icons/md'

export const Card = ({ poster, title, overview, children }) => {
	return(
		<StyledCard>
			<StyledPoster>
				{poster
					? <img src={`https://image.tmdb.org/t/p/w200${poster}`} alt={title}/>
					: <MdBrokenImage size="64" color="gray" />
				}
			</StyledPoster>
			<StyledDetails>
				<div className="details__content">
					<h2>{title}</h2>
					{ children }
				</div>
			</StyledDetails>
			<StyledHover>
				<div>
					<p>{overview}</p>
				</div>
			</StyledHover>
		</StyledCard>
	)
}

const StyledCard = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	overflow: hidden;
	border-radius: 10px;
`

const StyledPoster = styled.div`
	position: relative;
	width: 100%;
	height: 0;
	padding-top: 150%;
	overflow: hidden;
	& > img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		object-fit: cover;
	}
	& > svg {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`

const StyledDetails = styled.div`
	width: 100%;
	height: 100%;
	background-color: #000;
	color: #fff;
	.details__content {
		padding: .5rem;
	}
`

const StyledHover = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0,.75);
	color: #fff;
	opacity: 0;
	transition: opacity .2s ease-out;
	&:hover {
		opacity: 1;
	}
	& > div {
		padding: 1rem;
	}
`

Card.propTypes = {
	poster: PropTypes.string,
	title: PropTypes.string.isRequired,
	overview: PropTypes.string.isRequired,
	children: PropTypes.node,
}
