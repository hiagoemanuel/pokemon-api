import { createGlobalStyle } from 'styled-components'

export const Variables = createGlobalStyle`
    :root {
        --max-width: 1440px;
        
        --primary-color: ${props => props.mainTheme.primary};
        --secondary-color: ${props => props.mainTheme.secondary};
        --tertiary-color: ${props => props.pokemonTheme};
    }
`