import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import VideoPlayer from "./modules/video-player";
import Difference from "./modules/difference";
import Form from "./modules/form";


window.addEventListener('DOMContentLoaded', () => {
    const sliderMain = new MainSlider({container:'.page', btns:'.next'});
    sliderMain.render(); 

    const sliderShowUp = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    });
    sliderShowUp.init();

    const  sliderModules = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoPlay: true
    });
    sliderModules.init();

    const sliderFeed = new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active',
    });
    sliderFeed.init();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init(); 

    new Difference('.officerold', '.officernew', '.officer__card-item').init();

    new Form('form').init();
});