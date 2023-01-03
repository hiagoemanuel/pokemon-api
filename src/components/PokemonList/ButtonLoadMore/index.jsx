import { useContext } from 'react'
import { CardsListContext } from '../../../contexts/pokemons-card'
import { attributedCards } from '../../../constants/attributed-cards'
import { setPokemonData } from '../../../services/setPokemonData'

import { Container, Button } from './style'

let offSet = 0

function ButtonLoadMore() {
    const { pokemonCard, setPokemonCard } = useContext(CardsListContext)

    return (
        <Container className='button-container'>
            <Button
                onClick={async () => {
                    offSet += 10
                    const data = await Promise.all(await setPokemonData(offSet))
                    setPokemonCard([...pokemonCard, ...attributedCards(data)])
                }}>
                Carregar mais
            </Button>
        </Container>
    )
}

export { ButtonLoadMore }