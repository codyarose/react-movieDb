import React, { Fragment, useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { Search } from './components/Search'
import { Results } from './components/Results'
import { Pagination } from './components/Pagination'
import { API } from './utils/api'
import { Movie } from './components/Movie'
import IconButton from '@material-ui/core/IconButton'
import { MdArrowBack } from 'react-icons/md'

export const App = () => {
	const [query, setQuery] = useState('test')
	const [category, setCategory] = useState('movie')
	const [page, setPage] = useState(1)
	const [totalPages, setTotalPages] = useState()
	const [results, setResults] = useState({})
	const [view, setView] = useState()
	const [currentItem, setCurrentItem] = useState()

	const getMovies = () => {
		fetch(`https://api.themoviedb.org/3/search/${ category }?api_key=${ API }&language=en-US&query=${ query }&page=${ page }&include_adult=false`)
			.then(res => res.json())
			.then(data => setResults(data))
	}

	const resetSearch = data => {
		setPage(data)
		setView('results')
	}

	const handleNextPage = () => {
		setPage(page + 1)
	}
	const handlePrevPage = () => {
		setPage(page - 1)
	}

	const showItem = id => {
		setCurrentItem(id)
		setView('movie')
	}

	useEffect(() => {
		getMovies()
		results && setTotalPages(results.total_pages)
		// eslint-disable-next-line
	}, [query, category, page])

	useEffect(() => {
		currentItem ? setView('movie') : setView('results')
	}, [currentItem])

	return (
		<Fragment>
			<GlobalStyle />
			<StyledHeader>
				<h1>ReactMovieDB</h1>
			</StyledHeader>
			<Container>
				<Search setValue={setQuery} setCategory={setCategory} callback={resetSearch} />
				{view === 'results'
					? <Fragment>
						<Results
							results={results.results}
							category={category}
							setPage={page}
							showItem={showItem}
						/>
						<Pagination
							next={handleNextPage}
							prev={handlePrevPage}
							disablePrev={page === 1 && true}
							disableNext={page === totalPages && true}
						/>
					</Fragment>
					: <Fragment>
						<IconButton color="primary" onClick={() => setView('results')}>
							<MdArrowBack size={32} />
						</IconButton>
						<Movie currentItem={currentItem} />
					</Fragment>
				}
			</Container>
		</Fragment>
	);
}

export default App;

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		font-family: Roboto, Arial, sans-serif;
	}

	@keyframes fadeIn {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}
	@keyframes fadeOut {
		0% { opacity: 1; }
		100% { opacity: 0; }
	}
`

const StyledHeader = styled.header`
	text-align: center;
	font-weight: 900;
	margin: 0;
	text-transform: uppercase;
	margin-top: -3vw;
	color: rgba(0,0,0,0.25);
	& > h1 {
		font-size: 13vw;
		margin: 0;
	}
`

const Container = styled.main`
	width: 100%;
	max-width: 1365px;
	margin: 0 auto;
	z-index: 1;
`
