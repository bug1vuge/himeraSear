const regModalModule = () => {
    const triggers = document.querySelectorAll('#open-register-modal');
    const block = document.querySelector('.reg-modal-block');

    triggers.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            block.classList.add('visible');
        });
    });

    block.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('reg-modal-overlay')) {
            block.classList.remove('visible');
        }
    });
};

export default regModalModule;