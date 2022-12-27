import { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { setPokemonData } from '../../../../services/setPokemonData'
import { attributedCards } from '../../../../constants/attributed-cards'
import { CardsListContext } from '../../../../contexts/pokemons-card'

import { Card, Image, Name } from './style'

function PokemonCardsList() {
    const { pokemonCard, setPokemonCard } = useContext(CardsListContext)

    useEffect(() => {
        async function fetchData() {
            const data = await Promise.all(await setPokemonData())
            setPokemonCard([...attributedCards(data)])
        }
        fetchData()
    }, [setPokemonCard])

    return (
        pokemonCard.map((data, index) => (
            <Link to={`pokemon/${data.urlName ?? data.urlId}`} key={index}>
                <Card>
                    <Image className='card__img' src={data.image} alt="pokemon-card" />
                    <Name className='card__name'>
                        <h3>{data.name}</h3>
                        <h3>nº{data.id}</h3>
                    </Name>
                </Card>
            </Link>
        ))
    )
}

export { PokemonCardsList }