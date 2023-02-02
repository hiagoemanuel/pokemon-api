import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './Home'
import { PokemonDetails } from './PokemonDetails'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} exact path='/' />
                <Route element={<PokemonDetails />} path='/pokemon/:id' />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }