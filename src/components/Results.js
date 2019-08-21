import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { MediaCard } from './Card'

export const Results = ({ results, category, showItem, isLoading, error }) => {
	const [items, setItems] = useState()
	const [sorting, setSorting] = useState('relevance')

	useEffect(() => {
		setItems(results)
	}, [results])

	const sortByPopularity = () => {
		let sortedItems = [].concat(items)
		sortedItems.sort((a, b) => a.popularity - b.popularity).reverse()
		setItems(sortedItems)
		setSorting('popularity')
	}

	const sortByRelevance = () => {
		setItems(results)
		setSorting('relevance')
	}

	if (error) {
		return <div>{error.message}</div>
	}

	return (
		<Fragment>
			<StyledSorting>
				<ButtonGroup size="small">
					<Button disabled={sorting === 'popularity'} onClick={sortByPopularity}>Popularity</Button>
					<Button disabled={sorting === 'relevance'} onClick={sortByRelevance}>Relevance</Button>
				</ButtonGroup>
			</StyledSorting>
			{isLoading
				? <StyledLoading>Loading...</StyledLoading>
				: <StyledResults>
					{items && items.map(item =>
						<MediaCard
							showItem={showItem}
							key={item.id}
							id={item.id}
							poster={category === 'person' ? item.profile_path : item.poster_path}
							title={category === 'movie' ? item.title : item.name}
							overview={item.overview}
						/>)
					}
				</StyledResults>
			}
		</Fragment>
	)
}

const StyledSorting = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`

const StyledResults = styled.div`
	max-width: 1365px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
	grid-gap: 2rem 1rem;
	padding: 2rem;
`

const StyledLoading = styled.div`
	width: 100%;
	font-size: 5rem;
	text-align: center;
`

Results.propTypes = {
	results: PropTypes.array,
	category: PropTypes.string.isRequired,
}
