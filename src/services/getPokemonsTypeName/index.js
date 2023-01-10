async function getPokemonsTypeName(type) {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
    const json = await response.json()
    if (type === '') return json.results.slice(0, 18)
    return json.pokemon
}

export { getPokemonsTypeName }