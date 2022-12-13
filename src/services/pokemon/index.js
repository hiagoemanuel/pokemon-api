async function pokemonAPI(pokemon) {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    return await data.json()
}

export { pokemonAPI }