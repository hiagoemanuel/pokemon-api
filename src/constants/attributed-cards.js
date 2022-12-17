function attributedCards(datas) {
    return datas.map(data => ({
        name: data.name.replace('-', ' '),
        id: data.id.toString().padStart(3, '0'),
        image: data.sprites.front_default
    }))
}

export { attributedCards }