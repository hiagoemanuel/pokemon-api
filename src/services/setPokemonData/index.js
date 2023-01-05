import { getPokemonsList } from '../getPokemonsList'
import { getPokemonInfo } from '../getPokemonInfo'

async function setPokemonData(offSet) {
    const responsePokemonList = await getPokemonsList(offSet)
    const allPokemonData = responsePokemonList.map(pokemon => getPokemonInfo(pokemon.name))
    return allPokemonData
}

export { setPokemonData }