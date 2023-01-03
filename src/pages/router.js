import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './Home'
import { PokemonDetails } from './PokemonDetails'

import { useContext } from 'react'
import { ThemeContext } from '../contexts/themes'

import { GlobalStyle } from '../styles/global-style'
import { Variables } from '../styles/variables'

function AppRoutes() {
    const { mainTheme, pokemonTheme } = useContext(ThemeContext)

    return (
        <BrowserRouter>
            <Variables mainTheme={mainTheme} pokemonTheme={pokemonTheme} />
            <GlobalStyle />
            <Routes>
                <Route element={<Home />} exact path='/' />
                <Route element={<PokemonDetails />} path='/pokemon/:id' />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }