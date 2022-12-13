import { useEffect, useState } from 'react'
import pokemon from '../../constants/pokemon-data-api'
import { pokemonAPI } from '../../services/pokemon'
import './index.css'

function PokemonCardsList() {
    const [pokemonData, setPokemonData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await pokemonAPI('72')
            pokemon.setInfo(response)
        }
        setPokemonData([pokemon])
        fetchData()
    }, [])
    return (
        <>
            {
                pokemonData.map((data, index) => (
                    <article className='card' key={index}>
                        <img className='card__img' src={data.image} alt="pokemon-card" />
                        <footer className='card__name'>
                            <h3>{data.name}</h3>
                            <h3>nº {data.id}</h3>
                        </footer>
                    </article>
                ))
            }
        </>
    )
}

export { PokemonCardsList }

