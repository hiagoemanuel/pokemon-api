import { getPokemonList } from '../getPokemonList'
import { getPokemonInfo } from '../getPokemonInfo'

async function setPokemonData(offSet) {
    const responsePokemonList = await getPokemonList(offSet)
    const allPokemonData = responsePokemonList.map(pokemon => getPokemonInfo(pokemon.name))
    return allPokemonData
}

export { setPokemonData }