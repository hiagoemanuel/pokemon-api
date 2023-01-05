import { useState, createContext } from 'react'

const CardsListContext = createContext([])

function CardsProvider({ children }) {
    const [pokemonsCard, setPokemonsCard] = useState([])

    return (
        <CardsListContext.Provider value={{ pokemonsCard, setPokemonsCard }}>
            {children}
        </CardsListContext.Provider>
    )
}

export { CardsProvider, CardsListContext }