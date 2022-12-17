let amountPokemons = 10

async function getPokemonList(offSet) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${amountPokemons}&offset=${offSet}`)
    const data = await response.json()
    return data.results
}

export { getPokemonList } 