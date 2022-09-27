// the problem of the atomic model before Bohr
let x, y, orbit, w, c, r, size, energy, shrink, R, X, Y;

function setup(){
  createCanvas(windowWidth, windowHeight);
  reset();
  x = 300;
  y = 300;
  w = 0;
  c = color(0, 37, 222);
  r = 200;
  R = 0;
  size = 440;
  shrink = 60;
}

function reset(){
  r = 200;
  R = 0;
  size = 440;
  shrink = 60;
}

function draw(){
  background(0);
  translate(x, y);
  Orbit();
  Nucleus();
  Title();
  // noFill(); Title()の中のnoFill()と同じ位置にあったやつ
  r = constrain(r, 15, 200);
  w += TWO_PI * 0.004;
  let theta = PI / 100;
  theta += w;
  X = cos(theta) * r;
  Y = sin(theta) * r;
  keyPressed();
  push();
  // mousePressed();
  keyTyped();
  pop();

  electron(X, Y, r, w);
  if(r <= 16) {
   atomicdecay();
  }
}

function Orbit(){
  noFill();
  stroke(255)
  orbit = 400;
  ellipse(0, 0, orbit);
}

function Nucleus(){
  noStroke();
  fill(255, 13, 122);
  ellipse(0, 0, 32);
  textSize(20);
  text("Nucleus", - 35, 32);
}

function Title(){
  textSize(40);
  noFill();
  fill(163, 5, 255);
  text("The Problem of the Atomic Models before Bohr", - 300, - 250);
  noFill();
}

function electron(X, Y, r, w){
  fill(c);
  ellipse(X, Y, 16);
}

function atomicdecay(){
  R = constrain(R, 0, 440);
  R += 13;
  for(let i = 1; i < 9; i++){
      fill(240 * i / 8, 0, 0);
        ellipse(0, 0, R * (9 - i) / 8);
  }
  if(R > 400){
      fill(0);
      ellipse(0, 0, 480);
      size = constrain(size, 0, 400);
      size -=16;
      for(let j = 1; j < 9; j++){
        fill(240 * j / 8, 0, 0);
        ellipse(0, 0, size * (9 - j) / 8);
      }
       if(size < 30){
        fill(0);
        ellipse(0, 0, 50);
       }
  }
}

function keyPressed(){
 if(key === "Enter"){
   r--;
   shrink -= 9 / 40;
// Enterを押すと電子の周りのエネルギー半径が小さくする
 }
 if(key == " "){ reset(); } // スペースキーを押したらリセット

}

// function mouseClicked(){
//   // マウスがクリックされると電子の周りにエネルギーが表示される
//   translate(X, Y);
//   C = color(173, 252, 255);
//   fill(C);
//   ellipse(0, 0, 40);
// }

function keyTyped() {
  if (key === 'e' || key === "Enter"){
    wave();
  }
 //  if(key === "Enter"){
 //    r--;
 //    shrink -= 9 / 40;
 // // // Enterを押すと電子の周りのエネルギー半径が小さくする
 //  }
 //  if(key == " "){ reset(); } // スペースキーを押したらリセット
}

function mousePressed(){
  wave();
}

function wave(){
  translate(X, Y);
  C = color(173, 252, 255);
  fill(C);
  // ellipse(0, 0, shrink);
  shrink = constrain(shrink, 16, 60);
  let c1 = color(71, 234, 255);
  let c2 = color(79, 235, 255);
  let c3 = color(92, 236, 255);
  let c4 = color(102, 237, 255);
  let c5 = color(112, 238, 255);
  let c6 = color(122, 239, 255);
  let c7 = color(140, 241, 255);
  let c8 = color(150, 242, 255);
  let c9 = color(150, 255, 250);
  let c10 = color(156, 255, 250);
  let c11 = color(99, 255, 247);
  let c12 = color(199, 251, 255);
  let c13 = color(168, 255, 254);
  let c14 = color(122, 255, 253);
  let c15 = color(97, 255, 253);
  let c16= color(74, 255, 253);
  let c17 = color(87, 255, 238);
  let c18 = color(130, 255, 230);
  let c19 = color(94, 196, 255);
  let c20 = color(209, 238, 255);
  let colors = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10,
               c11, c12, c13, c14, c15, c16, c17, c18, c19, c20];
  for(let i = 0; i < colors.length; i++){
    fill(random(colors));
    ellipse(0, 0, shrink * (20 - i) / 20);
  }
}
