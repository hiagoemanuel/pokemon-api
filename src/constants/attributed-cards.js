function attributedCards(datas) {
    return datas.map(data => ({
        name: data.name.replace('-', ' '),
        urlName: data.name,
        id: data.id.toString().padStart(3, '0'),
        urlId: data.id,
        image: data.sprites.front_default,
        type: data.types.map(item => item.type.name),
        movesName: data.moves.map(item => item.move.name),
        abilities: data.abilities.map((item) => {
            return {
                name: item.ability.name,
                urlDiscription: item.ability.url
            }
        })
    }))
}

export { attributedCards }