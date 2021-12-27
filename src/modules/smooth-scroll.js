const smoothScroll = () => {
    const scrollToBtns = document.querySelectorAll('#to-reg-form');
    const scrollToSection = document.querySelector('.form-block');

    scrollToBtns.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            window.scroll({
                left: 0,
                top: scrollToSection.offsetTop,
                behavior: 'smooth'
            });
        });
    })
};

export default smoothScroll;