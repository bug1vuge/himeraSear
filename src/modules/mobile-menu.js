const mobileMenu = () => {
    const trigger = document.querySelector('.mobile-menu-btn');
    const block = document.querySelector('.adapt-menu__container');

    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        block.classList.add('visible');
    });

    block.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.closest('.adapt-menu__close-btn') || e.target.classList.contains('adapt-menu__list-link')) {
            block.classList.remove('visible');
        }
    });
};

export default mobileMenu;