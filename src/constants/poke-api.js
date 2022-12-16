import { getPokemonList } from '../services/getPokemonList'
import { getPokemonInfo } from '../services/getPokemonInfo'

async function pokemonData() {
    const responsePokemonList = await getPokemonList()
    const allPokemonData = responsePokemonList.map(pokemon => getPokemonInfo(pokemon.name))
    return allPokemonData
}

export { pokemonData }