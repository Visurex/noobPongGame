export default class Pad {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.gameWidth = canvas.width;
        this.gameHeight = canvas.height;
        this.imageColor = (e) => this.ctx.fillStyle = `${e}`;
        this.image = (x,y,w,h) => this.ctx.fillRect(x,y,w,h);
        this.width = 20;
        this.height = 100;
        this.pos = {x: 20, y: 0}
        canvas.addEventListener("mousemove", (e) => {
            /* console.log(`${e.offsetX} , ${e.offsetY}`) */
            this.pos.y = e.offsetY - this.height/2;
            this.pos.x = e.offsetX - this.width/2;

            if(this.pos.y <= 0) {
                // collision  upperWall with pad
                this.pos.y = this.gameHeight -this.gameHeight;
            };
            if(this.pos.y + this.height >= this.gameHeight) {
                // collision  downWall with pad
                this.pos.y = this.gameHeight - this.height;
            };

        });
    };

    draw() {
        this.imageColor("blue");
        this.image(this.pos.x, this.pos.y, this.width, this.height);
    };

    init() {
        this.draw();
    };
};