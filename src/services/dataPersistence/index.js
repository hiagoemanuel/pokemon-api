function dataPersistence(key, data, initialFunction) {
    if (localStorage.getItem(key)) {
        initialFunction(localStorage.getItem(key))
    } else {
        localStorage.setItem(key, data)
        initialFunction(localStorage.getItem(key))
    }
}

export { dataPersistence }