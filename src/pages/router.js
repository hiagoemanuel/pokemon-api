import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { PokemonList } from '../containers/PokemonList'
import { PokemonDetails } from './PokemonDetails'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PokemonList />} exact path='/'  />
                <Route element={<PokemonDetails />} path='/pokemon/:id'  />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }