import { useState, useEffect } from 'react'
import { API } from './api'

const APIService =  {
	loadMovies: async (queryString, page) => {
		const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en-US&query=${queryString}&page=${page}&include_adult=false`)
		const results = (res.ok ? res : Promise.reject(res))
		return await results.json()
	},
	loadMoviesById: async (category, currentItem) => {
		const res = await fetch(`https://api.themoviedb.org/3/${ category }/${ currentItem }?api_key=${ API }&language=en-US`)
		const results = (res.ok ? res : Promise.reject(res))
		return await results.json()
	},
}

export const useAPI = (method, ...params) => {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, onError] = useState(null)

	const fetchData = async () => {
		onError(null)

		try {
			setIsLoading(true)
			setData(await APIService[method](...params))
		} catch (e) {
			onError(e)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => { fetchData() }, [...params])

	return [data, isLoading, error, fetchData]
}
