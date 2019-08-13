import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {MdStar, MdStarBorder, MdStarHalf} from 'react-icons/md'

export const Rating = ({ rating }) => {
	const [stars, setStars] = useState()
	const calcStars = () => {
		const halfRating = rating / 2
		const starArray = []
		const totalStars = 5
		const fullStars = Math.floor(halfRating)
		const remainder = halfRating % 1
		const emptyStars = Math.floor(totalStars - halfRating)
		for (let i = 0; i < fullStars; i++) {
			starArray.push(1)
		}
		starArray.push(remainder)
		for (let i = 0; i < emptyStars; i++) {
			starArray.push(0)
		}
		setStars(starArray)
	}

	useEffect(() => {
		calcStars()
		// eslint-disable-next-line
	}, [])

	return(
		<StyledRating>
			{stars && stars.map((star, i) =>
				<span key={i}>
					{star === 1
						? <MdStar />
						: star >= 0.5
						? <MdStarHalf />
						: (star === 0 || star < 0.5)
						&& <MdStarBorder />
					}
				</span>
			)}
		</StyledRating>
	)
}

const StyledRating = styled.div`
	color: goldenrod;
	font-size: 2rem;
`
