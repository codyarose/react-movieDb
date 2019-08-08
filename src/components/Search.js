import React from 'react'
import PropTypes from 'prop-types'
import { useInput } from './input-hook'
import styled from 'styled-components'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import { MdSearch } from 'react-icons/md'

export const Search = ({ setValue, callback }) => {
	const { value, bind } = useInput('')

	const handleSubmit = e => {
		e.preventDefault()
		setValue(value)
		callback(1)
	}

	return(
		<SearchForm onSubmit={handleSubmit}>
			<Input
				{...bind}
				placeholder="Search"
				autoFocus={true}
				endAdornment={
					<InputAdornment position="end">
						<MdSearch size={20} />
					</InputAdornment>
				}
			/>
		</SearchForm>
	)
}

const SearchForm = styled.form`
	display: flex;
	justify-content: center;
	color: #fff;
	padding: 1rem;
	& > div {
		width: 100%;
		max-width: 400px;
	}
`
Search.propTypes = {
	setValue: PropTypes.func.isRequired,
}
