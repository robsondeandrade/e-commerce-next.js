import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fonts.body}, sans-serif;
    background-color: ${({ theme }) => theme.colors.secondary};
    margin: 0; 
    padding: 0; 
  }

`

export default GlobalStyle
