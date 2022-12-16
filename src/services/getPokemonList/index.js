const amountPokemons = 10
let offSet = Math.floor(Math.random() * 895)

async function getPokemonList() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${amountPokemons}&offset=${offSet}`)
    const data = await response.json()
    return data.results
}

export { getPokemonList }