export default class Slider {
    constructor(pageSelector, btns) {
        this.page = document.querySelector(pageSelector);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
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

    render() {
        try {
            this.hansonBlock = document.querySelector('.hanson');
        } catch(error) {}

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
        this.showSlides(this.slideIndex);
    }
}