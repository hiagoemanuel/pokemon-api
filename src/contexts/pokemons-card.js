import { useState, createContext, useEffect } from 'react'

const CardsListContext = createContext([])

function CardsProvider({ children }) {
    const [pokemonsCard, setPokemonsCard] = useState([])
    const [offSet, setOffSet] = useState(10)

    const [listBackup, setListBackup] = useState({
        allPokemons: {
            pokemons: useEffect(() => { if (listBackup.currentType === 'all') listBackup.allPokemons.pokemons = pokemonsCard }),
            offSet: useEffect(() => { if (listBackup.currentType === 'all') listBackup.allPokemons.offSet = offSet })
        },
        pokemonType: {
            pokemons: [],
            offSet: useEffect(() => { if (listBackup.currentType !== 'all') listBackup.pokemonType.offSet = offSet })
        },
        currentType: 'all',
        firstSet: true
    })

    return (
        <CardsListContext.Provider value={{
            pokemonsCard, setPokemonsCard,
            offSet, setOffSet,
            listBackup, setListBackup
        }}>
            {children}
        </CardsListContext.Provider>
    )
}

export { CardsProvider, CardsListContext }