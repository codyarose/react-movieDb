import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import { MdBrokenImage } from 'react-icons/md'
import { Fade } from '../utils/Fade'

export const MediaCard = ({ poster, title, overview, children }) => {
	const [show, setShow] = useState(false)
	const [openModal, setOpenModal] = useState(false)

	useEffect(() => {
		setShow(true)
	}, [])

	const handleOpen = () => {
		setOpenModal(true)
	}
	const handleClose = () => {
		setOpenModal(false)
	}

	return(
		<Fade show={show}>
			<Card onClick={handleOpen}>
				<StyledPoster>
					{poster
						? <StyledCardMedia
							image={`https://image.tmdb.org/t/p/w200${poster}`}
							title={title}
						/>
						: <MdBrokenImage size={64} color="gray" />
					}
				</StyledPoster>

				<StyledCardContent>
					<Typography variant="h5" component="h2">
						{title}
					</Typography>
					<Modal
						open={openModal}
						onClose={handleClose}
					>
						<ModalContent>
							<h3>{title}</h3>
							<p>{overview}</p>
						</ModalContent>
					</Modal>
				</StyledCardContent>
			</Card>
		</Fade>
	)
}

const StyledCardContent = styled(CardContent)`
	background-color: #000;
	color: #fff;
	height: 100%;
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

const ModalContent = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 400px;
	background-color: #fff;
	border: 2px solid blue;
	padding: 1.5rem;
	outline: none;
`

Card.propTypes = {
	poster: PropTypes.string,
	title: PropTypes.string,
	overview: PropTypes.string,
	children: PropTypes.node,
}
