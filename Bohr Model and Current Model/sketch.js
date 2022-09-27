// 最終課題を制作しよう
let x, y, orbit, w, Kw, Lw, Mw, c, n, r, X, Y,Kx, Ky,
 Lx, Ly, Mx, My, Nx, Ny, Px, Py, Nw,R, img1, img2,img3;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = 200;
  y = height * 3 / 5;
  w = 0;
  c = color(77, 127, 255);
  n = 1;

}

function draw(){
  background(0);
  Orbit();
  Nucleus();
  electron(x, y, 12, w);
  w += TWO_PI * 0.005;
  Title();
  // Introduction();
  Shells();
  noFill();
  push();
  translate(x * 3.2 , y);
  NucleusAndOrbital();
  electronK(Kx, Ky, 10, w);
  electronL(Lx, Ly, 11, w);
  electronM(Mx, My, 11, w);
  electronN(Nx, Ny, 10, w);
  pop();

  push();
  translate(x * 5.4, y);
  noStroke();
  fill(255, 13, 122);
  ellipse(0, 0, 10);
  keyPressed()
  Introduction();
  pop();
}

function Title(){
  noFill();
  fill(148, 46, 217);
  stroke(148, 46, 217);
  textSize(40);
  text("Bohr Model of the Atom", 0, 35);
  text("Current Model of the Atom", 750, 35);
}

function Introduction(){
  textSize(25);
  fill(255);
  if(mouseIsPressed){
    noFill();
    fill(0, 81, 255);
    stroke(0, 81, 255);
    textSize(20);
    let s = 'According to the uncertainty principle, position of the electron is just the probability.';
    text(s, -200 , -240, 400, 200);
  }
}

function Shells(){
  noFill();
  stroke(255);
  textSize(20);
  text("K", x + 100 * cos(PI / 4), y + 100 * sin(PI / 4) );
  text("L", x + 150 * cos(PI / 4), y + 150 * sin(PI / 4) );
  text("M", x + 200 * cos(PI / 4), y + 200 * sin(PI / 4) );
  textSize(30);
  fill(255);
  text("2D Model", x - 70, 100);
  textSize(30);
  noFill();
  fill(158, 218, 232);
  stroke(158, 218, 232);
  text("3D Model", x * 2.8,100);
}

function Orbit(){
  noFill()
  for(let i = 1; i < 4; i++){
    stroke(255)
    orbit  = 100 * (i+1);
      ellipse(x, y, orbit);
  }
}

function NucleusAndOrbital(){
  noStroke();
  fill(255, 13, 122);
  ellipse(0, 0, 30);
  noFill();
  stroke(28, 247, 255);
  ellipse(0 ,0, 400, 100);
}
function Nucleus(){
  noStroke();
  fill(255, 13, 122);
  ellipse(x, y, 30);
  textSize(20);
  text("Nucleus", x - 35, y + 31);
}

function electron(X, Y, r, w){
  beginShape();
  let theta = PI / 100;
  theta += w;
  X = x + cos(theta) * (n + 1) * 50;
  Y = y + sin(theta) * (n + 1) * 50;
  // 50,75,100 25(n+1) N=1,2,3
  fill(c);
  ellipse(X, Y, r);
  endShape();
}

function electronK(Kx, Ky, r, w){
  beginShape();
  let theta = PI / 10;
  // Kw = TWO_PI * 0.005;
  theta += w;
  Kx = cos(theta) * 200;
  Ky = sin(theta) * 50;
  fill(28, 247, 255);
  ellipse(Kx, Ky, r);
  endShape();
}

function electronL(Lx, Ly, r, w){
  beginShape();
  rotate(PI / 4);
  noFill();
  ellipse(0, 0, 400, 120);
  let theta = PI / 2;
  theta += w;
  Lx = cos(theta) * 200;
  Ly = sin(theta) * 60;
  fill(28, 247, 255);
  ellipse(Lx, Ly, r);
  endShape();
}

function electronM(Mx, My, r, w){
  beginShape();
  rotate(PI / 2);
  noFill();
  ellipse(0, 0, 400, 120);
  let theta = PI / 2;
  theta += w;
  Mx = cos(theta) * 200;
  My = sin(theta) * 60;
    fill(28, 247, 255);
  ellipse(Mx, My, r);
  // image(img2, Mx, My);
  endShape();
}

function electronN(Nx, Ny, r, w){
  beginShape();
  rotate(PI * 3 / 4);
  noFill();
  ellipse(0, 0, 400, 100);
  let theta = PI / 3;
  theta += w;
  Nx = cos(theta) * 200;
  Ny = sin(theta) * 50;
  fill(28, 247, 255);
  ellipse(Nx, Ny, r);
  endShape();
}

function electronP1(){//electron particle1
  beginShape();
  let theta  = random(0, TWO_PI)
  R = random(12, 120);
  Px = R * cos(theta);
  Py = R * sin(theta);
  fill(c);
  ellipse(Px, Py, 5);
  endShape();
}

function electronP2(){//electron particle2
  beginShape();
  let theta  = random(0, TWO_PI)
  R = random(120, 195);
  Px = R * cos(theta);
  Py = R * sin(theta);
  fill(c);
  ellipse(Px, Py, 5);
  endShape();
}

function electron1s(){
  textSize(30);
  fill(255);
  text("The 1s orbital", -100, -250);
  electronP1();electronP1();electronP1();electronP1();electronP1();electronP1();
  electronP1();electronP1();electronP1();electronP1();electronP1();electronP1();
  electronP1();electronP1();electronP1();electronP1();electronP1();electronP1();
  electronP1();electronP1();electronP1();electronP1();electronP1();electronP1();
  electronP1();electronP1();electronP1();electronP1();electronP1();electronP1();
  electronP1();electronP1();electronP1();electronP1();electronP1();electronP1();
  electronP2();electronP2();electronP2();electronP2();electronP2();electronP2();
  electronP2();electronP2();
}

function electronP3(){//electron particle3
  beginShape();
  let theta  = random(0, TWO_PI)
  R = random(12, 60);
  Px = R * cos(theta);
  Py = R * sin(theta);
  fill(c);
  ellipse(Px, Py, 5);
  endShape();
}

function electronP4(){//electron particle4
  beginShape();
  let theta  = random(0, TWO_PI)
  R = random(150, 195);
  Px = R * cos(theta);
  Py = R * sin(theta);
  fill(c);
  ellipse(Px, Py, 5);
  endShape();
}

function electron2s(){
  textSize(30);
  fill(255);
  text("The 2s orbital", -100, -250);
  electronP3();electronP3();electronP3();electronP3();electronP3();electronP3();
  electronP3();electronP3();electronP3();electronP3();electronP3();electronP3();
  electronP3();electronP3();electronP3();electronP3();electronP3();electronP3();
  electronP3();electronP3();
  electronP4();electronP4();electronP4();electronP4();electronP4();electronP4();
  electronP4();electronP4();electronP4();electronP4();electronP4();electronP4();
  electronP4();electronP4();electronP4();electronP4();electronP4();electronP4();
  electronP4();electronP4();electronP4();electronP4();electronP4();electronP4();
}

function electronP5(){//electron particle5
  beginShape();
  let theta  = random(0, TWO_PI)
  R = random(12, 40);
  Px = R * cos(theta);
  Py = R * sin(theta);
  fill(c);
  ellipse(Px, Py, 5);
  endShape();
}

function electronP6(){//electron particle6
  beginShape();
  let theta  = random(0, TWO_PI)
  R = random(70, 100);
  Px = R * cos(theta);
  Py = R * sin(theta);
  fill(c);
  ellipse(Px, Py, 5);
  endShape();
}

function electronP7(){//electron particle7
  beginShape();
  let theta  = random(0, TWO_PI)
  R = random(160, 195);
  Px = R * cos(theta);
  Py = R * sin(theta);
  fill(c);
  ellipse(Px, Py, 5);
  endShape();
}


function electron3s(){
  textSize(30);
  fill(255);
  text("The 3s orbital", -100, -250);
  electronP5();electronP5();electronP5();electronP5();electronP5();electronP5();
  electronP5();electronP5();electronP5();electronP5();electronP5();electronP5();
  electronP6();electronP6();electronP6();electronP6();electronP6();electronP6();
  electronP6();electronP6();electronP6();electronP6();electronP6();electronP6();
  electronP6();electronP6();electronP6();electronP6();electronP6();electronP6();
  electronP7();electronP7();electronP7();electronP7();electronP7();electronP7();
  electronP7();electronP7();electronP7();electronP7();electronP7();electronP7();
  electronP7();electronP7();electronP7();electronP7();electronP7();electronP7();
}

function qnumber1(){
  textSize(30);
  fill(255);
  text("(n = 1, K)", -800, -250);
}

function qnumber2(){
  textSize(30);
  fill(255);
  text("(n = 2, L)", -800, -250);
}

function qnumber3(){
  textSize(30);
  fill(255);
  text("(n = 3, M)", -800, -250);
}

function keyTyped() {
  if (key === '1'){ n = 1;}
  if (key === '2'){ n = 2;}
  if (key === '3'){ n = 3;}
}

function keyPressed(){
  if (key === '1'){electron1s(); qnumber1();}
  if (key === '2'){electron2s(); qnumber2();}
  if (key === '3'){electron3s(); qnumber3();}
}
