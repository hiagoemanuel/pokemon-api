import { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { setPokemonData } from '../../../services/setPokemonData'
import { attributedCards } from '../../../constants/attributed-cards'
import { CardsListContext } from '../../../contexts/pokemons-card'
import { pokemonsCardBackup } from '../ButtonLoadMore'
import { Loading } from '../../Loading'

import { Card, Image, Name } from './style'

function PokemonCardsList() {
    const { pokemonsCard, setPokemonsCard } = useContext(CardsListContext)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if (pokemonsCardBackup) {
            setPokemonsCard(pokemonsCardBackup)
            setIsLoaded(true)
            return
        }
        async function fetchData() {
            const data = await Promise.all(await setPokemonData())
            setPokemonsCard([...attributedCards(data)])
        }
        fetchData()
        setIsLoaded(true)
    }, [setPokemonsCard])

    if (isLoaded) {
        return pokemonsCard.map((data, index) => (
            <Link to={`pokemon/${data.urlName ?? data.urlId}`} key={index}>
                <Card>
                    <Image src={data.image} alt="pokemon-card" />
                    <Name>
                        <h3>{data.name}</h3>
                        <h3>nº{data.id}</h3>
                    </Name>
                </Card>
            </Link>
        ))
    } else {
        return <Loading />
    }
}

export { PokemonCardsList }