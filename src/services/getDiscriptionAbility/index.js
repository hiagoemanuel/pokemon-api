async function getDiscriptionAbility(url) {
    const response = await fetch(url)
    const data = await response.json()

    const discription = data.effect_entries.filter(item => {
        if (item.language.name === 'en') {
            return item.effect
        } else {
            return null
        }
    })

    if (discription[0]) return discription[0].effect
}

export { getDiscriptionAbility }