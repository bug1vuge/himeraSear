import accordionModule from "./modules/accordion";
import animItemsFunc from "./modules/anim";
import mobileMenu from "./modules/mobile-menu";
import regModalModule from "./modules/reg-modal";
import smoothScroll from "./modules/smooth-scroll";


try {
    animItemsFunc();
    accordionModule();
} catch (error) { }

mobileMenu();
regModalModule();
smoothScroll();