async function getDiscriptionAbility(url) {
    const response = await fetch(url)
    return await response.json()
}

export { getDiscriptionAbility }