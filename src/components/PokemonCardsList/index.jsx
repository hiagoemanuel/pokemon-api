import { useEffect, useState } from 'react'

import { pokemonData } from '../../constants/poke-api'

import './index.css'

function PokemonCardsList() {
    const [pokemonCard, setPokemonCard] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            let data = await Promise.all(await pokemonData())

            data = data.map(data => ({
                name: data.name.replace('-', ' '),
                id: data.id.toString().padStart(3, '0'),
                image: data.sprites.front_default
            }))

            setPokemonCard([...data])
        }
        fetchData()
    }, [])

    return (
        pokemonCard.map((data, index) => (
            <article className='card' key={index}>
                <img className='card__img' src={data.image} alt="pokemon-card" />
                <footer className='card__name'>
                    <h3>{data.name}</h3>
                    <h3>nº{data.id}</h3>
                </footer>
            </article>
        ))
    )
}

export { PokemonCardsList }