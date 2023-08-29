//entity.js


class Brick {
    rectangle = new Rectangle(0, 0, 0, 0);

    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        drawRectangleFromRectangle(this.rectangle, 2, "black", color);
    }

}

class Player {
    rectangle = new Rectangle(0, 0, 0, 0);
    //x = this.rectangle.x;
    //y = this.rectangle.y;

    constructor(x, y, width, height, color) {
        this.rectangle.x = x;
        this.rectangle.y = y;
        this.rectangle.width = width;
        this.rectangle.height = height;
        this.color = color;
    }

    get x() {
        return this.rectangle.x;
    }

    get y() {
        return this.rectangle.y;
    }

    set x(x) {
        this.rectangle.x = x;
    }

    set y(y) {
        this.rectangle.y = y;
    }




    draw() {
        drawRectangleFromRectangle(this.rectangle, 6, "black", this.color);
    }
}



class Ball {
    circle = new Circle(0, 0, 0, "black");
    xSpeed = 0;
    ySpeed = 0;

    constructor(x, y, radius, color) {
        this.circle.x = x;
        this.circle.y = y;
        this.circle.radius = radius;
        this.color = color;
    }



    draw() {
        drawCircleFromCoordinates(this.circle.x, this.circle.y, this.circle.radius, 4, "black", this.color);
    }
}