// X and Y coordinates for character
var characterX = 50;
var characterY = 50;

// Rectangles
var recXs = [];
var recYs = [];
var recWidth = [];
var recLength = [];
var rectangleXSpeed = [];
var rectangleYSpeed = [];

// Mouse click shape
var mouseShapeX;
var mouseShapeY;

// Colors
var r = [];
var g = [];
var b = [];
var a = [];

function setup() 
{
    createCanvas(800,540);

    // Create rectangles
    for(var i = 0; i < 5; i++) 
    {
        recXs[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 800)) + 1);
        recYs[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 540)) + 1);
        recWidth[i] = Math.floor(Math.random() * (50 - 10 + 1) + 10);
        recLength[i] = Math.floor(Math.random() * (75 - 20 + 1) + 20);
        rectangleXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
        rectangleYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
    }

    // Create random colors
    for(var i = 0; i < 5; i++)
    {
        r[i] = random(255);
        g[i] = random(255);
        b[i] = random(255);
        a[i] = random(200,255);
    }
}

function draw()
{
    // Setup background
    background('lightblue');
    stroke(0);

    // Draw border
    border();

    // Set exit
    exit();

    // Create character
    character();
    moveCharacter();

    // Place and move first obstacle
    for(var i = 0; i < recXs.length; i++) 
    {
        fill(r[i], g[i], b[i], a[i]);
        rect(recXs[i], recYs[i], recWidth[i], recLength[i]);
    }
    moveRectangle();

    // Create shape on mouse click
    clickShape();

    // Message if player reaches exit
    win();
}

function clickShape()
{
    fill('purple');
    circle(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

// Set up background
function border()
{
    fill('black');
    rect(0, 0, width, 10);
    rect(0, 0, 10, height);
    rect(0, height - 10, width, 10);
    rect(width - 10, 0, 10, height - 50);
}

// Set up exit
function exit()
{
    textSize(12);
    text("EXIT", width - 50, height - 50)
}

// Create character
function character()
{
    fill('gold');
    circle(characterX, characterY, 20);
}

// Character movement
function moveCharacter()
{
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
}

// Move rectangle
function moveRectangle()
{
    for(var i = 0; i < recXs.length; i++)
    {
        recXs[i] += rectangleXSpeed[i];
        recYs[i] += rectangleYSpeed[i];
    
        if(recXs[i] > width)
        {
            recXs[i] = 0;
        }
        if(recXs[i] < 0)
        {
            recXs[i] = width;
        }
        if(recYs[i] > height)
        {
            recYs[i] = 0;
        }
        if(recYs[i] < 0)
        {
            recYs[i] = height;
        }
    }
}

// Message if player reaches exit
function win()
{
    if(characterX > width - 21 && characterY > height - 50)
    {
        fill('black');
        textSize(30);
            text("You Win!", width / 2 - 30, height / 2 - 30);
    }
}