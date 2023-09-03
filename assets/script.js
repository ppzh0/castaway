function setup() {
    createCanvas(windowWidth, windowHeight); // Create a canvas covering the whole viewport
    noLoop();
    generateRandomRotatedSquares();
}

function generateRandomRotatedSquares() {
    var numSquares = 15;
    var minSize = 10;
    var maxSize = 100;

    for (var i = 0; i < numSquares; i++) {
        var gray = random(20, 125);
        fill(gray, 100);

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
