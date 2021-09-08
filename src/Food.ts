export default class Food {
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('food')!;
        console.log(this.element);
    }

    get X(){
        return this.element.offsetLeft;
    }

    get Y(){
        return this.element.offsetTop;
    }

    changePosition(): void {
        this.element.style.left = Math.round(Math.random()*29)*10+'px';
        this.element.style.top = Math.round(Math.random()*29)*10+'px';
    }
}