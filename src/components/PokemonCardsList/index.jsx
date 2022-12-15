import { useEffect, useState } from 'react'
import { getPokemonList } from '../../services/getPokemonList'
import { getPokemonInfo } from '../../services/getPokemonInfo'
import './index.css'

function PokemonCardsList() {
    const [pokemonCard, setPokemonCard] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const responsePokemonList = await getPokemonList()
            const allPokemonData = await Promise.all(responsePokemonList.map(pokemon => getPokemonInfo(pokemon.name)))
            console.log(allPokemonData)
            const data = allPokemonData.map(data => {
                return {
                    name: data.name,
                    id: data.id,
                    image: data.sprites.front_default
                }
            })
            setPokemonCard([...data])
        }
        fetchData()
    }, [])

    
    console.log(pokemonCard);

    return (
        pokemonCard.map((data, index) => (
            <article className='card' key={index}>
                <img className='card__img' src={data.image} alt="pokemon-card" />
                <footer className='card__name'>
                    <h3>{data.name}</h3>
                    <h3>nº {data.id}</h3>
                </footer>
            </article>
        ))
    )
}

export { PokemonCardsList }