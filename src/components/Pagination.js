import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export const Pagination = ({ next, prev, disablePrev, disableNext }) => {
	return(
		<StyledPagination>
			<Button
				variant="contained"
				color="primary"
				onClick={prev}
				disabled={disablePrev}
			>
				Previous
			</Button>
			<Button
				variant="contained"
				color="primary"
				onClick={next}
				disabled={disableNext}
			>
				Next
			</Button>
		</StyledPagination>
	)
}

const StyledPagination = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	max-width: 600px;
	margin: 0 auto 2rem;
`

Pagination.propTypes = {
	next: PropTypes.func.isRequired,
	prev: PropTypes.func.isRequired,
	disablePrev: PropTypes.bool,
	disableNext: PropTypes.bool,
}
