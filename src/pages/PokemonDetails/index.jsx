import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { getPokemonInfo } from '../../services/getPokemonInfo'
import { attributedCards } from '../../constants/attributed-cards'

import './index.css'

function PokemonDetails() {
    const { id } = useParams()
    const [pokemonInfo, setPokemonInfo] = useState({})

    useEffect(() => {
        async function fetchData() {
            const response = await getPokemonInfo(id)
            setPokemonInfo(attributedCards([response])[0])
        }
        fetchData()
    }, [])
    
    return (
        <main>
            <Link to='/' className='to-home'>{'< Voltar'}</Link>
            <div className='card'>
                <img src={pokemonInfo.image} alt="pokemon-image" />
            </div>
        </main>
    )
}

export { PokemonDetails }