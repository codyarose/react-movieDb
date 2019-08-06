import React from 'react'
import styled from 'styled-components'
import { MdBrokenImage } from 'react-icons/md'

export const Card = ({ poster, title, children }) => {
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
		</StyledCard>
	)
}

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

const StyledPoster = styled.div`
	position: relative;
	width: 100%;
	height: 0;
	padding-top: 150%;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
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
	background-color: #000;
	color: #fff;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	.details__content {
		padding: .5rem;
	}
`
