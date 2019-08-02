import React from 'react'
import Async from 'react-async'
import { API } from '../utils/api'
import { SimpleModal } from './Modal'

export const ResultsNew = ({ query }) => {
	const loadMovies = query => {
		fetch(`https://api.themoviedb.org/3/search/movie?api_key=${ API }&language=en-US&query=${ query }&page=1&include_adult=false`)
			.then(res => (res.ok ? res : Promise.reject(res)))
			.then(res => res.json())
	}

	return (
		<div>
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
		</div>
	)
}
