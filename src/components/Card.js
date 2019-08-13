import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { MdBrokenImage } from 'react-icons/md'
import { Fade } from '../utils/Fade'

export const MediaCard = ({ poster, title, overview, id, showItem }) => {
	const [show, setShow] = useState(false)

	useEffect(() => {
		setShow(true)
	}, [])

	return(
		<Fade show={show}>
			<StyledCard onClick={() => showItem(id)}>
				<StyledPoster>
					{poster
						? <StyledCardMedia
							image={`https://image.tmdb.org/t/p/w300${poster}`}
							title={title}
						/>
						: <MdBrokenImage size={64} color="gray" />
					}
				</StyledPoster>
				<StyledCardContent>
					<div className="card-content-inner">
						<Typography variant="h6" component="h2">
							{title}
						</Typography>
					</div>
				</StyledCardContent>
			</StyledCard>
		</Fade>
	)
}

const StyledCard = styled(Card)`
	position: relative;
	cursor: pointer;
	.MuiCardContent-root {
		padding: 0;
		&:last-child {
			padding: 0;
		}
	}
`

const StyledCardContent = styled(CardContent)`
	position: absolute;
	width: 100%;
	height: auto;
	bottom: 0;
	left: 0;
	background: linear-gradient(to bottom, rgba(0,0,0,0), rgb(0,0,0));
	color: #fff;
	padding: 0;
	.card-content-inner {
		padding: .5rem 1rem;
	}
`

const StyledCardMedia = styled(CardMedia)`
	height: 0;
	padding-top: 150%;
`
const StyledPoster = styled.div`
	position: relative;
	width: 100%;
	height: 0;
	padding-top: 150%;
	overflow: hidden;
	& > div {
		position: absolute;
		width: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	& > svg {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`

Card.propTypes = {
	poster: PropTypes.string,
	title: PropTypes.string,
	overview: PropTypes.string,
	children: PropTypes.node,
}
