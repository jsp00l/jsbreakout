const FPS = 144;
const MS_PER_FRAME = 1000 / FPS;
let lastTimeStamp = 0;
let framesDrawn = 0;

function gameLoop(currentTimeStamp) {
    mainDraw();
    window.requestAnimationFrame(gameLoop);

}


let playerPaddle = new Player(250, 400, 100, 20, "orange")
let ball = new Ball(25, 25, 12, "white");
ball.ySpeed = 2;
ball.xSpeed = 6;




function tick() {
    let currentTime = Date.now();
    let difference = currentTime - lastTimeStamp;
    lastTimeStamp = currentTime;

    ball.circle.y = ball.circle.y + ball.ySpeed;
    ball.circle.x = ball.circle.x + ball.xSpeed;


    resolveBallWallCollision(ball);
    resolveBallPaddleCollision(ball, playerPaddle);

    if (A_KEY_DOWN) {
        if (playerPaddle.rectangle.getLeft() > 0) {
            playerPaddle.rectangle.x -= 6;
        }
    }
    if (D_KEY_DOWN) {
        if (playerPaddle.rectangle.getRight() < CANVAS.width) {
            playerPaddle.rectangle.x += 6;
        }
    }

}

function mainDraw() {
    ctx.clearRect(0, 0, CANVAS.width, CANVAS.height);
    drawBackground();
    playerPaddle.draw();
    ball.draw();
}



setInterval(tick, 1000 / 60);
gameLoop(0);