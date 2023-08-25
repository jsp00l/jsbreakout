//draw.js

const DEFAULT_COLOR = "black";

const DEFAULT_LINEWIDTH = 1;
const DEFAULT_LINECOLOR = DEFAULT_COLOR;

function drawLineFromCoordinates(x1, y1, x2, y2, lineWidth = DEFAULT_LINEWIDTH, color = DEFAULT_LINECOLOR) {
    console.log("draw from coordinates");
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