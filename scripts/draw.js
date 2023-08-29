//draw.js

const DEFAULT_COLOR = "black";

const DEFAULT_LINEWIDTH = 1;
const DEFAULT_LINECOLOR = DEFAULT_COLOR;
const DEFAULT_FILLCOLOR = DEFAULT_COLOR;

function drawLineFromCoordinates(x1, y1, x2, y2, lineWidth = DEFAULT_LINEWIDTH, color = DEFAULT_LINECOLOR) {
    CTX.beginPath();
    CTX.moveTo(x1, y1);
    CTX.lineTo(x2, y2);
    CTX.lineWidth = lineWidth;
    CTX.strokeStyle = color;
    CTX.stroke();
    CTX.closePath();
}

function drawLineFromPoints(point1, point2, lineWidth = DEFAULT_LINEWIDTH, color = DEFAULT_LINECOLOR) {
    drawLineFromCoordinates(point1.x, point1.y, point2.x, point2.y, lineWidth, color);
}

function drawLineFromLine(line, lineWidth = DEFAULT_LINEWIDTH, color = DEFAULT_LINECOLOR) {
    drawLineFromCoordinates(line.x1, line.y1, line.x2, line.y2, lineWidth, color);
}

function drawLine() {
    Util.Redirect(arguments, drawLineFromCoordinates, 0, 0, 0, 0, 0, "s");
    Util.Redirect(arguments, drawLineFromPoints, Point, Point, 0, "s");
    Util.Redirect(arguments, drawLineFromLine, Line, 0, "s");
}

function drawRectangleFromCoordinates(x, y, width, height, lineWidth = DEFAULT_LINEWIDTH, color = DEFAULT_LINECOLOR, fillColor = DEFAULT_FILLCOLOR) {
    CTX.beginPath();
    CTX.rect(x, y, width, height);
    CTX.lineWidth = lineWidth;
    CTX.strokeStyle = color;
    CTX.fillStyle = fillColor;
    CTX.stroke();
    CTX.fill();
}

function drawRectangleFromRectangle(rectangle, lineWidth = DEFAULT_LINEWIDTH, color = DEFAULT_LINECOLOR, fillColor = DEFAULT_FILLCOLOR) {
    CTX.beginPath();
    CTX.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);

    CTX.lineWidth = lineWidth;
    CTX.strokeStyle = color;
    CTX.fillStyle = fillColor;
    CTX.stroke();
    CTX.fill();
}

function drawCircleFromCoordinates(x, y, radius, lineWidth = DEFAULT_LINEWIDTH, color = DEFAULT_LINECOLOR, fillColor = DEFAULT_FILLCOLOR) {
    CTX.beginPath();
    CTX.arc(x, y, radius, 0, 2 * Math.PI);
    CTX.lineWidth = lineWidth;
    CTX.strokeStyle = color;
    CTX.fillStyle = fillColor;
    CTX.stroke();
    CTX.fill();
}


function drawBackground() {
    drawRectangleFromCoordinates(0, 0, CANVAS.width, CANVAS.height, 0, "#023020", "#023020");
}

