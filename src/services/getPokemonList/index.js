const amountPokemons = 10
let offSet = Math.floor(Math.random() * 1144)

async function getPokemonList() {
    console.log(offSet);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${amountPokemons}&offset=${offSet}`)
    const data = await response.json()
    return data.results
}

export { getPokemonList }