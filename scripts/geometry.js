//geometry.js

class Point {
    x = 0;
    y = 0;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Line {
    x1 = 0;
    y1 = 0;
    x2 = 0;
    y2 = 0;
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
}

class Rectangle {
    x = 0;
    y = 0;
    width = 0;
    height = 0;

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    getMiddlePoint() {
        return new Point(this.width / 2, this.height / 2);
    }
    getLeft() {
        return this.x;
    }
    getRight() {
        return this.x + this.width;
    }
}

class Circle {
    x = 0;
    y = 0;
    radius = 0;

    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    getLeft() {
        return this.x - this.radius;
    }
    getRight() {
        return this.x + this.radius;
    }

    getTop() {
        return this.y - this.radius;
    }
    getBottom() {
        return this.y + this.radius;
    }
}  