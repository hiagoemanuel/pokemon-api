import { useContext } from 'react'
import { CardsListContext } from '../../contexts/context-cards-list'

import { attributedCards } from '../../constants/attributed-cards'
import { pokemonData } from '../../services/setPokemonData'

import './index.css'

let offSet = 0

function ButtonLoadMore() {
    const { pokemonCard, setPokemonCard } = useContext(CardsListContext)
    
    return (
        <div className='button-container'>
            <button className='cards__button'
                onClick={async () => {
                    offSet += 10
                    const data = await Promise.all(await pokemonData(offSet))
                    setPokemonCard([...pokemonCard, ...attributedCards(data)])
                }}>
                Carregar mais
            </button>
        </div>
    )
}

export { ButtonLoadMore }