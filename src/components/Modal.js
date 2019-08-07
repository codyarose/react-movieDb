import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Modal from '@material-ui/core/Modal'

export const SimpleModal = ({ children }) => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	return(
		<Fragment>
			<button onClick={handleOpen}>open</button>
			<Modal
				open={open}
				onClose={handleClose}
			>
				<ModalContent>
					{children}
				</ModalContent>
			</Modal>
		</Fragment>
	)
}

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

SimpleModal.propTypes = {
	children: PropTypes.node,
}
