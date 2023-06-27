export default class Brick {
    constructor(x,y) {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.image = document.getElementById('brick-image');
        this.width = 30;
        this.height = 15;
        this.pos = {x: x, y: y};
        this.drawImage = () => {this.ctx.drawImage(this.image,this.pos.x ,this.pos.y, this.width,this.height)};
    };

    draw() {
        this.drawImage();
    };

    init() {
        this.draw();
    };


};