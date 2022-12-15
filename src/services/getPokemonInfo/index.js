async function getPokemonInfo(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
    const data = await response.json().then()
    return data
}

export { getPokemonInfo }