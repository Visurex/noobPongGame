import Ball from './ball.js'
import Pad from './pad.js'
import Pad2 from './pad2.js'
import Brick from './brick.js'
import Game from './game.js'

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

const alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const pad2 = new Pad2();
const pad = new Pad();
const ball = new Ball();
const game = new Game(WIDTH,HEIGHT,ball,pad,pad2);

function gameLoop() {

    ctx.clearRect(0,0, canvas.width, canvas.height);
    game.init();
};
setInterval(gameLoop, 1000 / 60);