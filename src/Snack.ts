export default class Snack {
    element: HTMLElement;
    head: HTMLElement;
    bodies: HTMLCollection;
    constructor() {
        this.element = document.getElementById('snack')!;
        this.head = document.querySelector('#snack > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }

    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    set X(value: number) {
        if(this.X === value) {
            return;
        }
        if(value < 0 || value > 290) {
            throw new Error('游戏失败！');
        }

        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            if(value > this.X) {
                // 向右掉头，继续左走
                value = this.X - 10;
            }
            else{
                // 向左掉头，继续右走
                value = this.X + 10;
            }
        }

        this.moveBody();
        this.head.style.left = value + 'px';

        this.checkEatBody();
    }

    set Y(value: number) {
        if(this.Y === value) {
            return;
        }
        if(value < 0 || value > 290) {
            throw new Error('游戏失败！');
        }

        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            if(value > this.Y) {
                // 向下掉头，继续上走
                value = this.Y - 10;
            }
            else{
                // 向上掉头，继续下走
                value = this.Y + 10;
            }
        }

        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkEatBody();
    }

    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    }

    moveBody() {
        for (let index = this.bodies.length-1; index > 0; index--) {
            const prevElement = this.bodies[index - 1] as HTMLElement;
            let X = prevElement.offsetLeft;
            let Y = prevElement.offsetTop;
            (this.bodies[index] as HTMLElement).style.left = X + 'px';
            (this.bodies[index] as HTMLElement).style.top = Y + 'px';
        }
    }

    checkEatBody() {
        for (let index = 1; index < this.bodies.length; index++) {
            const element = this.bodies[index] as HTMLElement;
            if(this.X === element.offsetLeft && this.Y === element.offsetTop){
                throw(new Error('游戏失败！'));
            }
            
        }
    }

}