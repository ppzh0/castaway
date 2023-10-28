function setup() {
    createCanvas(windowWidth, windowHeight); // Create a canvas covering the whole viewport
    noLoop();
    generateRandomRotatedSquares();
}

function generateRandomRotatedSquares() {
    var numSquares = 25;
    var minSize = 7;
    var maxSize = 65;

    for (var i = 0; i < numSquares; i++) {
        var gray = random(10, 150);
        fill(gray, 125);

        var squareSize = random(minSize, maxSize);
        var squareX = random(squareSize, width - squareSize);
        var squareY = random(squareSize, height - squareSize);
        var rotationAngle = random(TWO_PI);

        push();
        translate(squareX, squareY);
        rotate(rotationAngle);
        rectMode(CENTER);
        rect(0, 0, squareSize * 2, squareSize * 2);
        pop();
    }
}
