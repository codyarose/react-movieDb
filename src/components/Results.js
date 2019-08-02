import React, { useState } from 'react'
import Async from 'react-async'
import { API } from '../utils/api'
import { useInput } from './input-hook'
import { SimpleModal } from './Modal'

export const Results = () => {
	const [query, setQuery] = useState('')
	// const [modalVis, setModalVis] = useState(false)

	const Search = () => {
		const { value, bind, reset } = useInput('')

		const handleSubmit = event => {
			event.preventDefault()
			setQuery(value)
			reset()
		}

		return(
			<form onSubmit={handleSubmit}>
				<input type="search" {...bind} placeholder="Search" />
				<input type="submit" value="Submit"/>
			</form>
		)
	}

	const loadMovies = () =>
	fetch(`https://api.themoviedb.org/3/search/movie?api_key=${ API }&language=en-US&query=${ query }&page=1&include_adult=false`)
		.then(res => (res.ok ? res : Promise.reject(res)))
		.then(res => res.json())

	return(
		<div>
			<Search />
			{query &&
				<Async promiseFn={loadMovies}>
					<Async.Loading>Loading...</Async.Loading>
					<Async.Fulfilled>
						{data => {
							return (
								data.results.map(result => (
									<div key={result.id}>
										{result.poster_path &&
											<img src={`https://image.tmdb.org/t/p/w200${result.poster_path}`} alt=""/>
										}
										<h2>{result.title}</h2>
										<SimpleModal>
											<h3>{result.title}</h3>
											<p>{result.overview}</p>
										</SimpleModal>
									</div>
								))
							)
						}}
					</Async.Fulfilled>
					<Async.Rejected>
						{error => `Something went wrong: ${error.message}`}
					</Async.Rejected>
				</Async>
			}
		</div>
	)
}
