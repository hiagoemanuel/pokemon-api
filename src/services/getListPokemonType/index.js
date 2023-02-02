async function getListPokemonType(url) {
    const response = await fetch(url)
    const json = await response.json()
    return json.pokemon
}

export { getListPokemonType }