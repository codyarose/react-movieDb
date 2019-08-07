import React, { Fragment, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { Search } from './components/Search'
import { Results } from './components/Results'

function App() {
  const [query, setQuery] = useState('')

  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <Search setValue={setQuery} />
        {query &&
          <Results queryString={query} />
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
`

const Container = styled.main`
  width: 100%;
  max-width: 1365px;
  margin: 0 auto;
`
