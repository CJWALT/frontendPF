function scrollUp(){
    const scrollUp = document.getElementById('scroll');

    if (this.scrollY >= 560)scrollUp.classList.add('show_scroll')
    else scrollUp.classList.remove('show_scroll');
}

window.addEventListener('scroll', scrollUp);