import Brick from "./brick.js";

export default class Game {
    constructor(WIDTH, HEIGHT,ball,pad,pad2) {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.gameWidth = WIDTH;
        this.gameHeight = HEIGHT;
        this.ball = ball;
        this.pad = pad;
        this.pad2 = pad2;
        this.scoreBlue = 0;
        this.scoreRed = 0;
        this.brickArray = [];
        this.newArray = this.bricksArray();
        this.bricksWall = () => {
            for(let bricks of this.newArray) {
                bricks.drawImage();                
            };
        };
        
    };

    bricksArray() {
        for(let i=12; i<13; i++) { 
            for(let j=0; j< canvas.height/17; j++) {
                this.brickArray.push(new Brick(i * 32, j * 17 ));
            };
        };
        return this.brickArray;
    };

    updateBall() {

        this.ball.pos.x += this.ball.speed.x;
        this.ball.pos.y += this.ball.speed.y;
        const ballReverseX = () => this.ball.speed.x -= this.ball.speed.x * 2;
        const ballReverseY = () => this.ball.speed.y -= this.ball.speed.y * 2;

        if(this.ball.pos.x >= this.gameWidth - this.ball.image.width) {
            //  collision with right side
            ballReverseX();
            this.scoreRed--
        } else if(this.ball.pos.x <= 0) {
            //collision with left side
            ballReverseX();
            this.scoreBlue--
        } else if(this.ball.pos.y >= this.gameHeight - this.ball.image.height) {
            //  collision with down side
            ballReverseY();
        } else if(this.ball.pos.y <= 0) {
            // collision with upper side
            ballReverseY();
        }
        // collision with pad2
        if(this.ball.pos.x <= this.pad2.pos.x + this.pad2.width
            && this.ball.pos.x >= this.pad2.pos.x 
            && this.ball.pos.y <= this.pad2.pos.y + this.pad2.height 
            && this.ball.pos.y >= this.pad2.pos.y) {
            ballReverseX();
            this.scoreRed++
        }
        // collision with pad
        if(this.ball.pos.x <= this.pad.pos.x + this.pad.width
            && this.ball.pos.x >= this.pad.pos.x 
            && this.ball.pos.y <= this.pad.pos.y + this.pad.height 
            && this.ball.pos.y >= this.pad.pos.y) {
            ballReverseX();
            console.log("7");
            this.scoreBlue++
        }
        if(this.ball.pos.x <= this.pad.pos.x + this.pad.width && this.ball.pos.y <= this.pad.pos.y + this.pad.height/2) {
            ballReverseY();
        }
        if(this.ball.pos.x <= this.pad.pos.x + this.pad.width && this.ball.pos.y >= this.pad.pos.y + this.pad.height && Math.sign(this.ball.speed.y) == 1) {
            ballReverseY();
        }
    };
    
    drawText() {
        //  header
        let header =document.getElementById('header');
        header.innerText = `Blue score: ${this.scoreBlue}`;
        header.style.textAlign = "center";
        header.style.color = "blue";
        //footer
        let footer = document.getElementById('footer');
        footer.innerText = `Red score: ${this.scoreRed}`;
        footer.style.textAlign = "center";
        footer.style.color = "red";
    };

    updatePad2() {
        this.pad2.pos.y = this.ball.pos.y -this.pad2.height/2
    };
    
    init() {
        this.ball.init();
        this.pad.init();
        this.pad2.init();
        this.updateBall();
        this.updatePad2();
        this.drawText();
        this.bricksWall();
        this.newArray.forEach((element, index) => {
            // collision with bricks
            if(    this.ball.pos.x >= element.pos.x 
                && this.ball.pos.x - this.ball.width/2 <= element.pos.x + element.width
                && this.ball.pos.y + this.ball.height/2 >= element.pos.y
                && this.ball.pos.y <= element.pos.y + element.height ) 
            {
                this.ball.speed.x -= this.ball.speed.x * 2;
                this.newArray.pop(index)
            };
        });
    };
};