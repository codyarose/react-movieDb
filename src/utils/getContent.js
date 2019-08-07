import { API } from './api'

export const getMovies = async (queryString, page) => {
	const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en-US&query=${queryString}&page=${page}&include_adult=false`);
	const data = (res.ok ? res : Promise.reject(res));
	return await data.json();
}
