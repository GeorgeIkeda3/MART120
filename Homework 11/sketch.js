// X and Y coordinates for character
var characterX = 50;
var characterY = 50;

// Obstacle 1
var obstacle1X = 400;
var obstacle1Y = 275;
var rectangleXSpeed;
var rectangleYSpeed;

// Obstacle 2
var obstacle2X = 190;
var obstacle2Y = 240;
var ellipseXSpeed;
var ellipseYSpeed;

// Mouse click shape
var mouseShapeX;
var mouseShapeY;

function setup() 
{
    createCanvas(800,540);
    rectangleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
    rectangleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
    ellipseXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
    ellipseYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
}

function draw()
{
    // Setup background
    background('lightblue');
    stroke(0);
    fill('black');
    rect(0, 0, width, 10);
    rect(0, 0, 10, height);
    rect(0, height - 10, width, 10);
    rect(width - 10, 0, 10, height - 50);
    textSize(12);
    text("EXIT", width - 50, height - 50)

    // Place character
    fill('gold');
    circle(characterX, characterY, 20);

    // Move character
    if (keyIsDown(UP_ARROW))
    {
        if (characterY < 20)
        {
            characterY == 20;
        }
        else
        {
            characterY -= 5;
        }
    }
    if (keyIsDown(DOWN_ARROW))
    {
        if (characterY > height - 20)
        {
            characterY == height - 20;
        }
        else
        {
            characterY += 5;
        }
    }
    if (keyIsDown(LEFT_ARROW))
    {
        if (characterX < 20)
        {
            characterX == 20;
        }
        else
        {
            characterX -= 5;
        }
    }
    if (keyIsDown(RIGHT_ARROW))
    {
        if (characterX > width - 20)
        {
            characterX = width - 20;
        }
        else 
        {
            characterX += 5;
        }
    }

    // Place and move first obstacle
    fill('red');
    rect(obstacle1X, obstacle1Y, 35, 35);
    obstacle1X += rectangleXSpeed;
    obstacle1Y += rectangleYSpeed;
    if(obstacle1X > width)
    {
        obstacle1X = 0;
    }
    if(obstacle1X < 0)
    {
        obstacle1X = width;
    }
    if(obstacle1Y > height)
    {
        obstacle1Y = 0;
    }
    if(obstacle1Y < 0)
    {
        obstacle1Y = height;
    }

    // Place and move second obstacle
    fill('green');
    ellipse(obstacle2X, obstacle2Y, 50, 25);
    obstacle2X += ellipseXSpeed;
    obstacle2Y += ellipseYSpeed;
    if(obstacle2X > width)
    {
        obstacle2X = 0;
    }
    if(obstacle2X < 0)
    {
        obstacle2X = width;
    }
    if(obstacle2Y > height)
    {
        obstacle2Y = 0;
    }
    if(obstacle2Y < 0)
    {
        obstacle2Y = height;
    }

    // Create shape on mouse click
    fill('purple');
    circle(mouseShapeX, mouseShapeY, 25);

    // Message if player reaches exit
    if(characterX > width - 21 && characterY > height - 50)
    {
        fill('black');
        textSize(30);
        text("You Win!", width / 2 - 30, height / 2 - 30);
    }
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}