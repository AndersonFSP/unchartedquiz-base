import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
    margin:0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', 'sans-serif';
    color: ${({ theme }) => theme.colors.contrastText}
}

html, body {
    min-height: 100vh;
}

#__next {
    display: flex;
    flex: 1;
    flex-direction: column;
}
`
db
const theme = db.theme;
const backgroundImage = db.bg;
export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}> 
      <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}