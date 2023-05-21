export default class Difference {
    constructor(oldColumn, newColumn, items) {
        try {
            this.oldColumn = document.querySelector(oldColumn);
            this.newColumn = document.querySelector(newColumn);
            this.oldItems = this.oldColumn.querySelectorAll(items);
            this.newItems = this.newColumn.querySelectorAll(items);
            this.oldCounter = 0;
            this.newCounter = 0;
        } catch(e){}
    }

    bindTriggers(container, items, counter) {
        container.querySelector('.plus').addEventListener('click', () => {
            if (counter !== items.length -2) {
                items[counter].classList.add('animated', 'fadeInUp');
                items[counter].style.display = 'flex';
                counter++;
            } else {
                items[counter].classList.add('animated', 'fadeInUp');
                items[counter].style.display = 'flex';
                items[items.length -1].remove();
            }
        });
    }

    hideItems(items) {
        items.forEach((item, idx, arr) => {
            if (idx !== arr.length -1) {
                item.style.display = 'none';
            }
        });

    }
    init() {
        try {
            this.hideItems(this.oldItems);
            this.hideItems(this.newItems);
            this.bindTriggers(this.oldColumn, this.oldItems, this.oldCounter);
            this.bindTriggers(this.newColumn, this.newItems, this.newCounter);
        } catch(e){}
    }
}