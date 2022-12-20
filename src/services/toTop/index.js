function toTop() {
    const button = document.getElementsByClassName('to-top')[0]
    
    if (window.pageYOffset >= 500) {
        button.style.display = 'flex'
    } else if (button) {
        button.style.display = 'none'
    }

}

export { toTop }