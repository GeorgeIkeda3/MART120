function setup() {
    createCanvas(500,600);
  }
  
  function draw() {
    background(50,117,168);

    // Head
    fill(237,187,140);
    circle(237,119,130);

    // Eyes
    fill(255,255,255);
    ellipse(218,99,20,12);
    ellipse(255,99,20,12);
    fill(34,49,161);
    circle(218,99,9);
    circle(255,99,9);
    
    // Mouth
    fill(255,255,255);
    triangle(235,160,212,145,256,145);
    strokeWeight(12);
    stroke('red');
    point(234,152);
    stroke('black');
    strokeWeight(1);

    // Nose
    line(232,113,226,129);
    line(226,129,235,127);

    // Body
    fill('lightgrey');
    rect(188,185,100,160);

    // Arms and Legs
    strokeWeight(10);
    line(184,223,139,287);
    line(292,223,333,287);
    line(205,350,205,475);
    line(270,350,270,475);
    strokeWeight(1);

    // Name
    textSize(30);
    text("Jorge El Curioso",129,551);

  }