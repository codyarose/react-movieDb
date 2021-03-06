import React from 'react'
import PropTypes from 'prop-types'
import { useInput } from './input-hook'
import styled from 'styled-components'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import Select from '@material-ui/core/Select'
import { MdSearch } from 'react-icons/md'

export const Search = ({ setValue, setCategory, callback }) => {
	const { value:query, bind:bindQuery } = useInput('')
	const { value:category, bind:bindCategory } = useInput('movie')

	const handleSubmit = e => {
		e.preventDefault()
		if (query !== '') {
			setValue(query)
			setCategory(category)
			callback(1)
		}
	}

	return(
		<SearchForm onSubmit={handleSubmit}>
			<Input
				{...bindQuery}
				placeholder="Search"
				autoFocus={true}
				endAdornment={
					<InputAdornment position="end">
						<MdSearch size={20} />
					</InputAdornment>
				}
			/>
			<StyledSelect
				native
				{...bindCategory}
			>
				<option value="movie">Movies</option>
				<option value="tv">TV Shows</option>
				<option value="person">People</option>
			</StyledSelect>
		</SearchForm>
	)
}

const SearchForm = styled.form`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	color: ${props => props.theme.color};
	padding: 1rem;
	& > div {
		width: 100%;
		max-width: 300px;
		margin: 0 1rem 1rem;
	}
	.MuiInputBase-root {
		color: ${props => props.theme.color};
	}
	.MuiInput-underline:before {
		border-color: ${props => props.theme.underline};
	}
	.MuiInput-underline:after {
		border-color: ${props => props.theme.underlineActive};
	}
`

const StyledSelect = styled(Select)`
	.MuiSelect-icon {
		color: ${props => props.theme.color};
		opacity: .54;
	}
`

Search.propTypes = {
	setValue: PropTypes.func.isRequired,
}
