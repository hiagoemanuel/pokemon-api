import { getListPokemonType } from "../getListPokemonType"
import { getPokemonInfo } from "../getPokemonInfo"

async function setPokemonsFilterData(url) {
    const typeListResponse = await getListPokemonType(url)
    const pokemonsList = typeListResponse.map(item => getPokemonInfo(item.pokemon.name))
    return pokemonsList
}

export { setPokemonsFilterData }