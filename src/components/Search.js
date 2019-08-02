import React from 'react'
import { useInput } from './input-hook'

export const Search = ({ setValue }) => {
	const { value, bind, reset } = useInput('')

	const handleSubmit = e => {
		e.preventDefault()
		setValue(value)
		reset()
	}

	return(
		<form onSubmit={handleSubmit}>
			<input type="text" {...bind} placeholder="Search" />
			<input type="submit" value="Submit" />
		</form>
	)
}
