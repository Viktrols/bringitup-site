 import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(btns) {
        super(btns);
    }
    showSlides(n) {
        if (n > this.slides.length){
            this.slideIndex = 1;
        }

        if (n < 1){
            this.slideIndex = this.slides.length;
        }
        try {
            this.hansonBlock.style.opacity = '0';
            if (n === 3) {
                this.hansonBlock.classList.add('animated');
                setTimeout(() => {
                    this.hansonBlock.style.opacity = '1';
                    this.hansonBlock.classList.add('slideInUp');
                }, 3000);
            } else {
                this.hansonBlock.classList.remove('slideInUp');
            }

        } catch (error) {}
        

        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

        this.slides[this.slideIndex -1].style.display = 'block';
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    bindTriggers() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlides(1);
            });

            item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            })
        });
        document.querySelectorAll('.prevmodule').forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlides(-1);
            });
        });
    }
    render() {
        if (this.container) {
            try {
                this.hansonBlock = document.querySelector('.hanson');
            } catch(error) {}
            this.showSlides(this.slideIndex);
            this.bindTriggers();
        }
    }
}