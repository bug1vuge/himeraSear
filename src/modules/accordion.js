const accordionModule = () => {
    const accordionTriggers = document.querySelectorAll('.accordion-item__btn');
    const accordionItems = document.querySelectorAll('.accordion-item');
    const accordionTopItems = document.querySelectorAll('.accordion-item__title');

    const accordionFunc = (items) => {
        items.forEach((el, index) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();

                const currBtnIndex = index;

                accordionItems.forEach((el, index) => {
                    const currItemContent = el.querySelector('.accordion-item__text');
                    const currItemIndex = index;

                    if (currBtnIndex === currItemIndex) {
                        el.classList.toggle('active');
                        currItemContent.style.maxHeight = `${currItemContent.scrollHeight}px`;
                    };

                    if (!el.classList.contains('active')) {
                        currItemContent.style.maxHeight = `${0}px`;
                    };

                });

            });
        });
    };

    if (screen.width > 768) {
        accordionFunc(accordionTriggers);
    } else {
        accordionFunc(accordionTopItems);
    };
};

export default accordionModule;


