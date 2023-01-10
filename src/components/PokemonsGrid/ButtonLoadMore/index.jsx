import { useContext } from 'react'
import { CardsListContext } from '../../../contexts/pokemons-card'
import { attributedCards } from '../../../constants/attributed-cards'
import { setPokemonData } from '../../../services/setPokemonData'

import { Container, Button } from './style'

let offSet = 0
let buttonText = <h5>Carregar mais</h5>
export let pokemonsCardBackup

function ButtonLoadMore() {
    const { pokemonsCard, setPokemonsCard } = useContext(CardsListContext)

    async function loadMore() {
        offSet += 10
        const data = await Promise.all(await setPokemonData(offSet))

        setPokemonsCard([...pokemonsCard, ...attributedCards(data)])
        pokemonsCardBackup = [...pokemonsCard, ...attributedCards(data)]
    }

    return (
        <Container>
            <Button onClick={() => loadMore()}>
                {buttonText}
            </Button>
        </Container>
    )
}

export { ButtonLoadMore }