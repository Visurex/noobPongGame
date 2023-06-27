export default class Ball {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.gameWidth = canvas.width;
        this.gameHeight = canvas.height;
        this.image = document.getElementById('ball-image');
        this.width = 15;
        this.height = 15;
        this.speed = {x: 5, y: 1}
        this.pos = {x: this.gameWidth /4, y: this.gameHeight /2 }
    };

    update() {
        let newImage =this.image.getBoundingClientRect()
        console.log(newImage)
    };
    draw() {
        this.ctx.drawImage(this.image,this.pos.x,this.pos.y,this.width,this.height);
    };

    init() {
        this.draw();
    };
};