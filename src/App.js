import React, { Fragment, useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { Search } from './components/Search'
import { Results } from './components/Results'
import { Pagination } from './components/Pagination'
import { API } from './utils/api'

export const App = () => {
	const [query, setQuery] = useState('yes')
	const [category, setCategory] = useState('movie')
	const [page, setPage] = useState(1)
	const [totalPages, setTotalPages] = useState()
	const [results, setResults] = useState({})

	const getMovies = () => {
		fetch(`https://api.themoviedb.org/3/search/${ category }?api_key=${ API }&language=en-US&query=${ query }&page=${ page }&include_adult=false`)
			.then(res => res.json())
			.then(data => setResults(data))
	}

	const resetSearch = data => {
		setPage(data)
	}

	const handleNextPage = () => {
		setPage(page + 1)
	}
	const handlePrevPage = () => {
		setPage(page - 1)
	}

	useEffect(() => {
		getMovies()
		results && setTotalPages(results.total_pages)
		// eslint-disable-next-line
	}, [query, category])

	return (
		<Fragment>
			<GlobalStyle />
			<Container>
				<Search setValue={setQuery} setCategory={setCategory} callback={resetSearch} />
				{query &&
					<Fragment>
						<Results
							results={results.results}
							category={category}
							setPage={page}
						/>
						<Pagination
							next={handleNextPage}
							prev={handlePrevPage}
							disablePrev={page === 1 && true}
							disableNext={page === totalPages && true}
						/>
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

const Container = styled.main`
  width: 100%;
  max-width: 1365px;
  margin: 0 auto;
`
