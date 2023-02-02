function headerAcordeon(item) {
    const acordenActive = document.querySelector('.active')
    item.firstChild.classList.add('active')
    if (acordenActive) acordenActive.classList.remove('active')
}

export { headerAcordeon }