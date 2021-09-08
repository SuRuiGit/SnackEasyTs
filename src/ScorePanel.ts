export default class ScorePanel {
    private _score: number = 0;
    private _level: number = 1;
    scoreElement: HTMLElement;
    levelElement: HTMLElement;
    levelLimit: number;
    levelUpScore: number;
    constructor(levelLimit: number = 10, levelUpScore: number = 10) {
        this.scoreElement = document.getElementById('score')!;
        this.levelElement = document.getElementById('level')!;
        this.levelLimit = levelLimit;
        this.levelUpScore = levelUpScore;
    }

    get score(): number {
        return this._score;
    }
    set score(newScore: number) {
        this._score = newScore;
    }

    get level(): number {
        return this._level;
    }
    set level(newLevel: number) {
        this._level = newLevel;
    }

    addScore() {
        this.scoreElement.textContent = ++this._score + '';
        if(this._score % this.levelUpScore === 0) {
            this.levelUp();
        }
    }

    levelUp() {
        if(this._level < this.levelLimit) {
            this.levelElement.textContent = ++this.level + '';
        }
    }

}