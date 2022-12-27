import { useState, createContext } from 'react'

const CardsListContext = createContext([])

function CardsProvider({ children }) {
    const [pokemonCard, setPokemonCard] = useState([])

    return (
        <CardsListContext.Provider value={{ pokemonCard, setPokemonCard }}>
            {children}
        </CardsListContext.Provider>
    )
}

export { CardsProvider, CardsListContext }