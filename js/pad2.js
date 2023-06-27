export default class Pad2 {
    constructor(ballObj) {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.imageColor = (e) => this.ctx.fillStyle = `${e}`;
        this.image = (x,y,w,h) => this.ctx.fillRect(x,y,w,h);
        this.width = 20;
        this.height = 100;
        this.pos = {x: this.canvas.width - this.width -20, y: 0}
        this.ball = ballObj;
    };
    
    draw() {
        this.imageColor("red");
        this.image(this.pos.x, this.pos.y, this.width, this.height);

    };

    init() {
        this.draw();
    };
};