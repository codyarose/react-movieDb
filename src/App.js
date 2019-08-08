import React, { Fragment, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { Search } from './components/Search'
import { Results } from './components/Results'
import { Pagination } from './components/Pagination'

export const App = () => {
	const [query, setQuery] = useState('')
	const [page, setPage] = useState(1)
	const [totalPages, setTotalPages] = useState()

	const resetSearch = data => {
		setPage(data)
	}

	const getPages = data => {
		setTotalPages(data)
	}

	const handleNextPage = () => {
		setPage(page + 1)
	}
	const handlePrevPage = () => {
		setPage(page - 1)
	}

	return (
		<Fragment>
			<GlobalStyle />
			<Container>
				<Search setValue={setQuery} callback={resetSearch} />
				{query &&
					<Fragment>
						<Results queryString={query} setPage={page} callback={getPages} />
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
