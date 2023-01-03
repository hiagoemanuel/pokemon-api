import { useState, createContext } from 'react'

import { themes } from '../constants/themes'

const ThemeContext = createContext({})

function ThemeProvider({ children }) {
    const [mainTheme, setMainTheme] = useState(themes.mainTheme.lightMode)
    const [pokemonTheme, setPokemonTheme] = useState(themes.pokemonTheme[4])

    return (
        <ThemeContext.Provider
            value={
                {
                    mainTheme,
                    setMainTheme,
                    pokemonTheme,
                    setPokemonTheme
                }
            }
        >
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext }