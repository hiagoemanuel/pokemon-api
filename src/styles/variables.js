import { createGlobalStyle } from 'styled-components'

export const Variables = createGlobalStyle`
    :root {
        --max-width: 1440px;
        
        --primary-font: 'VT323', sans-serif;

        --primary-color: ${props => props.mainTheme.primary};
        --secondary-color: ${props => props.mainTheme.secondary};
        --tertiary-color: ${props => props.pokemonTheme};
    }
`