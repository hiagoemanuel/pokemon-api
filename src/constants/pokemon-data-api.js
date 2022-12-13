const pokemon = {
    name: '',
    id: 0,
    image: '',
    setInfo(pokemon) {
        this.name = pokemon.name
        this.id = pokemon.id
        this.image = pokemon.sprites.front_default
    }
}

export default pokemon