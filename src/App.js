import React, { Fragment, useState, useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { useAPI } from './utils/getContent'
import { Search } from './components/Search'
import { Results } from './components/Results'
import { Pagination } from './components/Pagination'
import { SingleResult } from './components/SingleResult'
import IconButton from '@material-ui/core/IconButton'
import { MdArrowBack, MdInvertColors } from 'react-icons/md'
import { light } from './themes/light'
import { dark } from './themes/dark'

export const App = () => {
	const [query, setQuery] = useState('test')
	const [category, setCategory] = useState('movie')
	const [page, setPage] = useState(1)
	const [totalPages, setTotalPages] = useState()
	const [view, setView] = useState()
	const [currentItem, setCurrentItem] = useState()
	const [results, isLoading, error] = useAPI('loadMovies', query, page)
	const [theme, setTheme] = useState(light)

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

	const toggleTheme = () => {
		theme === light ? setTheme(dark) : setTheme(light)
	}

	useEffect(() => {
		results && setTotalPages(results.total_pages)
		// eslint-disable-next-line
	}, [query, category, page])

	useEffect(() => {
		currentItem ? setView('singleResult') : setView('results')
	}, [currentItem])

	return (
		<ThemeProvider theme={theme}>
			<Fragment>
				<GlobalStyle />
				<StyledHeader>
					<h1>ReactMovieDB</h1>
				</StyledHeader>
				<Container>
					<Search setValue={setQuery} setCategory={setCategory} callback={resetSearch} />
					{view === 'results' &&
						<Fragment>
							<Results
								results={results && results.results}
								category={category}
								setPage={page}
								showItem={showItem}
								isLoading={isLoading}
								error={error}
							/>
							<Pagination
								next={handleNextPage}
								prev={handlePrevPage}
								disablePrev={page === 1 && true}
								disableNext={page === totalPages && true}
							/>
						</Fragment>
					}
					{view === 'singleResult' &&
						<Fragment>
							<IconButton color="primary" onClick={() => setView('results')}>
								<MdArrowBack size={32} />
							</IconButton>
							<SingleResult currentItem={currentItem && currentItem} category={category} />
						</Fragment>
					}
					<StyledThemeToggle onClick={() => toggleTheme()}>
						<MdInvertColors />
					</StyledThemeToggle>
				</Container>
			</Fragment>
		</ThemeProvider>
	);
}

export default App;

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		font-family: Roboto, Arial, sans-serif;
		background: ${props => props.theme.background};
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
	color: ${props => props.theme.color};
	opacity: .25;
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

const StyledThemeToggle = styled(IconButton)`
	&.MuiButtonBase-root {
		position: fixed;
		bottom: 0;
		right: 0;
	}
	&.MuiIconButton-root {
		color: ${props => props.theme.color};
	}
`
