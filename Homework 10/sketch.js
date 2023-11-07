var left_eye = 218;
var right_eye = 255;
var left_eye_movement;
var right_eye_movement;

var top_leg = 350;
var bottom_leg = 475;
var leg_movement;

var left_x_top_arm = 184;
var left_y_top_arm = 223
var left_x_bottom_arm = 139;
var left_y_bottom_arm = 287;
var right_x_top_arm = 292;
var right_y_top_arm = 223;
var right_x_bottom_arm = 333;
var right_y_bottom_arm = 287;
var left_arm_movement;
var right_arm_movement;

var size = 30;
var count = 0;
var size_increase = 3;

function setup() {
    createCanvas(500,600);
    left_eye_movement = floor(random() * 10) + 1;
    right_eye_movement = left_eye_movement * -1;
    leg_movement = floor(random() * 10) + 1;
    left_arm_movement = floor(random() * 10) + 1;
    right_arm_movement = left_arm_movement * -1;
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
    circle(left_eye,99,9);
    left_eye += left_eye_movement;
    if(left_eye >= 500 || left_eye <= 0)
    {
      left_eye_movement *= -1;
    }
    circle(right_eye,99,9);
    right_eye += right_eye_movement;
    if(right_eye >= 500 || right_eye <= 0)
    {
      right_eye_movement *= -1;
    }
    
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

    // Arms
    strokeWeight(10);
    line(left_x_top_arm,left_y_top_arm,left_x_bottom_arm,left_y_bottom_arm);
    left_x_top_arm += left_arm_movement;
    left_y_top_arm += left_arm_movement;
    left_x_bottom_arm += left_arm_movement;
    left_y_bottom_arm += left_arm_movement;
    if (left_x_top_arm >= 500 || left_x_bottom_arm <= 0)
    {
      left_arm_movement *= -1;
    }
    line(right_x_top_arm,right_y_top_arm,right_x_bottom_arm,right_y_bottom_arm);
    right_x_top_arm += right_arm_movement;
    right_y_top_arm += right_arm_movement;
    right_x_bottom_arm += right_arm_movement;
    right_y_bottom_arm += right_arm_movement;
    if (right_x_bottom_arm >= 500 || right_x_top_arm <= 75)
    {
      right_arm_movement *= -1;
    }


    // Legs
    line(205,top_leg,205,bottom_leg);
    line(270,top_leg,270,bottom_leg);
    top_leg += leg_movement;
    bottom_leg += leg_movement;
    if(top_leg >= 475 || top_leg <=0)
    {
      leg_movement *= -1;
    }
    strokeWeight(1);

    // Name
    textSize(size);
    if (count >= 5)
    {
      size_increase *= -1;
      count = 0;
    }
    text("Jorge El Curioso",129,551);
    size += size_increase;
    count++;
  }