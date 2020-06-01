

//-----------------------
//     Lists of medias
//-----------------------
let accessoiresList = [];
let backgroundsList = [];
let principalesList = [];
let fontsList = [];

let accessoires;
let bg;
let principal;
let cadre;
let typography;

let back;

let render;
let renderBack;

let dlButton;
let newButton;


function preload() {
  accessoiresList[0] = loadImage("[]data/accessoires/COCKTAIL.png");
  accessoiresList[1] = loadImage("[]data/accessoires/GLACE.png");
  accessoiresList[2] = loadImage("[]data/accessoires/COQUILLAGE.png");
  accessoiresList[3] = loadImage("[]data/accessoires/COQUILLAGE2.png");
  accessoiresList[4] = loadImage("[]data/accessoires/ETOILE.png");
  accessoiresList[5] = loadImage("[]data/accessoires/PALMIER.png");
  accessoiresList[6] = loadImage("https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/accessoires/PARASOL2.png");
  accessoiresList[7] = loadImage("https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/accessoires/SOLEIL.png");
  accessoiresList[8] = loadImage("https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/accessoires/SUNSET.png");
  accessoiresList[9] = loadImage("https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/accessoires/SURF.png");
  accessoiresList[10] = loadImage("https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/accessoires/TRANSAT.png");

  backgroundsList[0] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/bg/CIEL.PNG');
  backgroundsList[1] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/bg/CIEL2.PNG');
  backgroundsList[2] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/bg/CIEL3.PNG');
  backgroundsList[3] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/bg/FOND SUNSET.PNG');
  backgroundsList[4] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/bg/MER.PNG');
  backgroundsList[5] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/bg/SABLE.png');

  principalesList[0] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/principal/ARNOLD.png');
  principalesList[1] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/principal/BITE.png');
  principalesList[2] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/principal/BODY.png');
  principalesList[3] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/principal/BOOBS.png');
  principalesList[4] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/principal/BOUCHE.png');
  principalesList[5] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/principal/CREW.png');
  principalesList[6] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/principal/CUL SHORT.png');
  principalesList[7] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/principal/CUL VELO.png');
  principalesList[8] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/principal/CUL.png');
  principalesList[9] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/principal/DAVID2.png');
  principalesList[10] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/principal/ESPADON.png');
  principalesList[11] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/principal/FEMME DOS.png');
  principalesList[12] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/principal/LIBERTAD.png');
  principalesList[13] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/principal/MAGNUM.png');
  principalesList[14] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/principal/MAGNUM2.png');
  principalesList[15] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/principal/MEUFS.png');
  principalesList[16] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/principal/PAMELA.png');
  principalesList[17] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/principal/RICHARD.png');
  principalesList[18] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/principal/TENNIS.png');
  principalesList[19] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/principal/VOLLEY.png');
  principalesList[20] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/principal/WAW.png');

  fontsList[0] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/typo/13.png');
  fontsList[1] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/typo/1.png');
  fontsList[2] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/typo/2.png');
  fontsList[3] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/typo/3.png');
  fontsList[4] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/typo/4.png');
  fontsList[5] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/typo/5.png');
  fontsList[6] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/typo/6.png');
  fontsList[7] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/typo/7.png');
  fontsList[8] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/typo/8.png');
  fontsList[9] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/typo/9.png');
  fontsList[10] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/typo/10.png');
  fontsList[11] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/typo/11.png');
  fontsList[12] = loadImage('https://github.com/geoffroyPdda/geoffroyPdda.github.io/blob/master/data/typo/12.png');

  back = loadImage('data/carte postale back.jpg');
}

function setup() {
  //-----------------------------
  //   Display for User
  //-----------------------------
  createCanvas(750, 500, WEBGL);
  dlButton = createButton('C\'est toi que je veux !');
  dlButton.position(100, height + 20);
  dlButton.mousePressed(savePostcard);
  
  newButton = createButton('Give me une autre !');
  newButton.position(500, height + 20);
  newButton.mousePressed(newPostcard);


  //-----------------------------
  //    Render in HiRes
  //-----------------------------
  render = createGraphics(1500, 1000);//, WEBGL);
  renderBack = createGraphics(1500, 1000);

  accessoires = new Accessories();
  bg = new Background();
  cadre = new Cadre();
  principal = new Principal();
  typography = new Typography();
  noLoop();
}

function draw() {
  background(220, 20, 100);

  //move origin to up Left corner
  translate(-width / 2, -height / 2, 0);

  //COMPOSITION
  bg.compose(backgroundsList, render);
  accessoires.compose(accessoiresList, render);
  principal.compose(principalesList, render)
  cadre.compose(render);
  typography.compose(fontsList);

  //DISPLAYING
  cadre.displayFond(render)
  bg.display(render);
  accessoires.display(render);
  principal.display(render);
  cadre.displayCadre(render);
  typography.display(render);

  image(render, 0, 0, width, height);

}

function newPostcard() {
  redraw();
}

function savePostcard() {
  renderBack.background(255);
  renderBack.image(back, 0, 0);
  cadre.displayCadre(renderBack);

  saveCanvas(render, 'Sea, Sex, and Sun - ' + year() + '.' + month() + '.' + day() + ' - ' + hour() + '.' + minute() + '.' + second(), 'png');
  saveCanvas(renderBack, 'Back - ' + year() + '.' + month() + '.' + day() + ' - ' + hour() + '.' + minute() + '.' + second(), 'png');

}




class Typography {

  constructor() {

      this.typoSelected = [];
      this.nbrTypo = 1;
  }

  compose(typoList) {

      this.typoSelected = [];
      this.typoSelected[0] = random(typoList);
  }

  display(render) {
      render.push();
      render.imageMode(CORNER);
      render.image(this.typoSelected[0], 0, 0);
      render.pop();
  }
}


class Principal{

  constructor(){
      this.principalSelected = [];
      this.nbrPrincipal = 1;
  }

  compose(principalList, render){
      this.principalSelected = [];
      this.principalSelected[0] = new PImageExtended(random(principalList).get(), render);
      this.principalSelected[0].rotation(QUARTER_PI, render);
  }

  display(render){
      this.principalSelected[0].display(render);
  }
}


class PImageExtended {
  constructor(img_, render) {

      this.img = img_;
      this.translate = createVector(random(render.width), random(render.height));
      this.rotate = 0;
      this.sc = 1;
      this.w = this.img.width;
      this.h = this.img.height;
      this.rotatedW = this.w;
      this.rotatedH = this.h;
  }

  computeNewDIm(render) {
      if (this.rotate < PI) {
          this.rotatedW = this.img.width * cos(this.rotate) + this.img.height * sin(this.rotate);
          this.rotatedH = this.img.width * sin(this.rotate) + this.img.height * cos(this.rotate);
      } else {
          this.rotatedW = this.img.height * cos(this.rotate - PI) + this.img.width * sin(this.rotate - PI);
          this.rotatedH = this.img.height * sin(this.rotate - PI) + this.img.width * cos(this.rotate - PI);
      }
      this.translate = createVector(random(this.rotatedW/2, render.width-this.rotatedW/2), random(this.rotatedH/2, render.height-this.rotatedH/2));
  }

  rotation(rotate, render) {
      this.rotate = random(-rotate/2, rotate/2);;
      this.computeNewDIm(render);
  }

  displayTrail() {
  }

  scale(sc, render) {
      this.sc = sc;
      this.img.resize(int(this.sc*this.img.width), 0);
      this.computeNewDIm(render);
  }

  display(render) {
      render.push();
      //translate(width/2, height/2);
      render.translate(this.translate.x, this.translate.y);
      render.rotate(this.rotate);
      render.imageMode(CENTER);
      render.image(this.img, 0, 0);
      render.pop();
  }
}



class Cadre{

  constructor(){
      this.rCadre = 0;
      this.gCadre = 0;
      this.bCadre = 0;

      this.rUpLeft = 0;
      this.gUpLeft = 0;
      this.bUpLeft = 0;

      this.rUpRight = 0;
      this.gUpRight = 0;
      this.bUpRight = 0;

      this.rDownRight = 0;
      this.gDownRight = 0;
      this.bDownRight = 0;

      this.rDownLeft = 0;
      this.gDownLeft = 0;
      this.bDownLeft = 0;
  }

  compose(render){
      this.rCadre = random(255);
      this.gCadre = random(255);
      this.bCadre = random(255);

      this.rUpLeft = random(255);
      this.gUpLeft = random(255);
      this.bUpLeft = random(255);

      this.rUpRight = random(255);
      this.gUpRight = random(255);
      this.bUpRight = random(255);

      this.rDownRight = random(255);
      this.gDownRight = random(255);
      this.bDownRight = random(255);

      this.rDownLeft = random(255);
      this.gDownLeft = random(255);
      this.bDownLeft = random(255);
  }

  displayFond(render){

      render.push();
      render.imageMode(CORNER);
      render.beginShape();
      render.noStroke();
      //fill(this.rUpLeft, this.gUpLeft, this.bUpLeft);
      render.fill(random(255), random(255),random(255))
      render.vertex(0, 0);

      //fill(this.rUpRight, this.gUpRight, this.bUpRight);
      render.fill(random(255), random(255),random(255));
      render.vertex(render.width, 0);

      render.fill(random(255), random(255),random(255))
      render.vertex(render.width, render.height);

      render.fill(random(255), random(255),random(255))
      render.vertex(0, render.height);
      render.endShape(CLOSE);
      render.pop();
  }
  
  displayCadre(render){

      let r = random(255);
      let g = random(255);
      let b = random(255);
      render.push();
      render.imageMode(CORNER);

      render.beginShape();
      render.strokeWeight(50);
      render.fill(0, 0);

      render.stroke(this.rCadre, this.gCadre, this.bCadre )
      render.vertex(0, 0);

      render.stroke(this.rCadre, this.gCadre, this.bCadre )
      render.vertex(render.width, 0);

      render.stroke(this.rCadre, this.gCadre, this.bCadre )
      render.vertex(render.width, render.height);

      render.stroke(this.rCadre, this.gCadre, this.bCadre )
      render.vertex(0, render.height);

      render.endShape(CLOSE);
      render.pop();
  }
}


class Background{

  constructor(){
      this.bgSelected = [];
      this.nbrBG = 1;
  }

  compose(bgList, render){
      this.bgSelected = [];
      this.bgSelected[0] = new PImageExtended(random(bgList).get(), render);
      this.bgSelected[0].rotation(TWO_PI, render);
  }

  display(render){
      this.bgSelected[0].display(render);
  }
}



class Accessories {
  constructor() {
      this.imgSelected = [];
  }

  compose(imgList, render) {
      this.imgSelected = [];

      let nbrAccess = random(4) + 1;

      let minScale = 0.3;
      let maxScale = 1.0;

      if (nbrAccess == 1) {
          minScale = 0.8;
          maxScale = 1.0;
      }
      else if (nbrAccess == 2) {
          minScale = 0.6;
          maxScale = 1.0;
      }
      else if (nbrAccess == 3) {
          minScale = 0.5;
          maxScale = 1.0;
      }
      else if (nbrAccess == 4) {
          minScale = 0.3;
          maxScale = 1.0;
      }
      else {
          minScale = 0.3;
          maxScale = 1.0;
      }

      for (let i = 0; i < nbrAccess; i++) {
          this.imgSelected[i] = new PImageExtended(random(imgList).get(), render);
          this.imgSelected[i].scale(random(minScale, maxScale), render);
          this.imgSelected[i].rotation(QUARTER_PI, render);
      }
  }

  display(render) {
      for (let i = 0; i < this.imgSelected.length; i++) {
          this.imgSelected[i].display(render);
      }
  }
}
