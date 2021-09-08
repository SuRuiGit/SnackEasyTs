import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snack from "./Snack";

export default class GameControl {
    snack: Snack;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = "Right";
    isLived: boolean = true;
    constructor() {
        this.snack = new Snack();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    init() {
        document.addEventListener('keydown', this.onKeyDown);
        this.run();
    }

    onKeyDown = (e: KeyboardEvent) => {
        if([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            this.direction = e.key;
        }
    }

    run() {
        let X = this.snack.X;
        let Y = this.snack.Y;
        switch(this.direction) {
            case 'ArrowLeft':
            case 'Left': {
                X -= 10;
                break;
            }
            case 'ArrowRight':
            case 'Right': {
                X += 10;
                break;
            }
            case 'ArrowUp':
            case 'Up': {
                Y -= 10;
                break;
            }
            case 'ArrowDown':
            case 'Down': {
                Y += 10;
                break;
            }
            default: break;
        }
        this.checkEat(X, Y);
        try{
            this.snack.X = X;
            this.snack.Y = Y;
        }
        catch(e){
            alert(e);
            this.isLived = false;
        }

        this.isLived && setTimeout(this.run.bind(this), 300 - ((this.scorePanel.level-1) * 30));
    }

    checkEat(X: number, Y: number) {
        if(X === this.food.X && Y === this.food.Y) {
            this.food.changePosition();
            this.scorePanel.addScore();
            this.snack.addBody();
        }
    }
}