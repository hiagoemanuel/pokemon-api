let amountPokemons = 10

async function getPokemonsList(offSet) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${amountPokemons}&offset=${offSet}`)
    const data = await response.json()
    return data.results
}

export { getPokemonsList } 