import { Link } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { CardsListContext } from '../../contexts/context-cards-list'

import { pokemonData } from '../../services/setPokemonData'
import { attributedCards } from '../../constants/attributed-cards'

import './index.css'

function PokemonCardsList() {
    const { pokemonCard, setPokemonCard } = useContext(CardsListContext)

    useEffect(() => {
        async function fetchData() {
            const data = await Promise.all(await pokemonData())
            setPokemonCard([...attributedCards(data)])
        }
        fetchData()
    }, [setPokemonCard])

    return (
        pokemonCard.map((data, index) => (
            <Link to={`pokemon/${data.urlName ?? data.urlId}`}  key={index}>
                <article className='card'>
                    <img className='card__img' src={data.image} alt="pokemon-card" />
                    <footer className='card__name'>
                        <h3>{data.name}</h3>
                        <h3>nº{data.id}</h3>
                    </footer>
                </article>
            </Link>
        ))
    )
}

export { PokemonCardsList }