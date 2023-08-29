function resolveBallWallCollision(ball) {
    if (ball.circle.getLeft() < 0) {
        ball.circle.x = ball.circle.radius + 3;
        ball.xSpeed = -1 * ball.xSpeed;

    }

    if (ball.circle.getRight() > CANVAS.width) {
        ball.circle.x = parseInt(CANVAS.width) - ball.circle.radius - 3;
        ball.xSpeed = -1 * ball.xSpeed;
    }


    if (ball.circle.getTop() < 0) {
        ball.circle.y = ball.circle.radius + 3;
        ball.ySpeed = -1 * ball.ySpeed;
    }

    if (ball.circle.getBottom() > CANVAS.height) {
        ball.circle.y = parseInt(CANVAS.height) - ball.circle.radius - 3;
        ball.ySpeed = -1 * ball.ySpeed;
    }
}

function resolveBallPaddleCollision(ball, paddle) {
    if (paddle.rectangle.getRight() >= ball.circle.x && paddle.rectangle.getLeft() <= ball.circle.x) {
        if (ball.circle.getBottom() > paddle.rectangle.y) {
            ball.circle.y = ball.circle.y - 3;
            ball.ySpeed = -1 * ball.ySpeed;
        }
    }
}