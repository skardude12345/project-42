var hr, min, sec;
var secAngle, minAngle, hrAngle;

function setup() {
  createCanvas(800, 400);


}

function draw() {
  background(0);

  angleMode(DEGREES);

  hr = hour();
  min = minute();
  sec = second();


  secAngle = map(sec, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);

  translate(width / 2, height / 2);
  rotate(-90);

  push()
  rotate(secAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  strokeWeight(1);
  fill(255);
  text(sec, 107, 0);
  pop();

  push()
  rotate(minAngle);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  strokeWeight(1);
  fill(255);
  text(min, 107, 0);
  pop();

  push()
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0, 0, 100, 0);
  strokeWeight(1);
  fill(255);
  if (hr === 12) {
    text(hr, 107, 0);
  } else {
    text(hr % 12, 107, 0);
  }
  pop();


  strokeWeight(7)
  noFill()

  push()
  stroke(255, 0, 0);
  arc(0, 0, 290, 290, 0, secAngle);
  pop()

  push()
  stroke(0, 255, 0);
  arc(0, 0, 275, 275, 0, minAngle);
  pop()

  push()
  stroke(0, 0, 255);
  arc(0, 0, 260, 260, 0, hrAngle);
  pop()

  fill(255);
  stroke(0);
  rotate(90);
  textSize(30)
  text(hr + " : " + min + " : " + sec, 200, 0);

}