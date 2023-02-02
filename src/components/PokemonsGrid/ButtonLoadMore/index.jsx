import { useContext, useState } from 'react'
import { setPokemonData } from '../../../services/setPokemonData'
import { attributedCards } from '../../../constants/attributed-cards'
import { CardsListContext } from '../../../contexts/pokemons-card'
import { Container, Button } from './style'
import { Loading } from '../../Loading'

function ButtonLoadMore() {
    const { pokemonsCard, setPokemonsCard, offSet, setOffSet } = useContext(CardsListContext)
    const { listBackup } = useContext(CardsListContext)
    const [isLoaded, setIsLoaded] = useState(true)

    async function loadMore() {
        setIsLoaded(false)

        if (listBackup.currentType === 'all') {
            setOffSet(offSet + 10)
            const data = await Promise.all(await setPokemonData(offSet))
            setPokemonsCard([...pokemonsCard, ...attributedCards(data)])
        } else {
            setOffSet(offSet + 10)
            setPokemonsCard(attributedCards(listBackup.pokemonType.pokemons).slice(0, listBackup.pokemonType.offSet))
        }

        setIsLoaded(true)
    }

    return (
        <Container>
            {isLoaded ?
                <Button onClick={() => loadMore()}>
                    <h1>Carregar mais</h1>
                </Button>
                :
                <Button>
                    <Loading button />
                </Button>
            }
        </Container>
    )
}

export { ButtonLoadMore }