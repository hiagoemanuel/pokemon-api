function toTop() {
    const button = document.getElementById('to-top')
    
    if (window.pageYOffset >= 500 && button) {
        button.style.display = 'flex'
    } else if (button) {
        button.style.display = 'none'
    }
}

export { toTop }