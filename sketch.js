
let isWinter;
let isSummer;

//-----------------------
//     Lists of medias
//-----------------------
let accessoiresListSummer = [];
let backgroundsListSummer = [];
let principalesListSummer = [];
let fontsListSummer = [];

let accessoiresListWinter = [];
let backgroundsListWinter = [];
let principalesListWinter = [];
let fontsListWinter = [];

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

isSummer = false;
isWinter = !isSummer;

function preload() {

    if (isSummer) {

        accessoiresListSummer[0] = loadImage("data/summer/accessoires/COCKTAIL.png");
        accessoiresListSummer[1] = loadImage("data/summer/accessoires/GLACE.png");
        accessoiresListSummer[2] = loadImage("data/summer/accessoires/COQUILLAGE.png");
        accessoiresListSummer[3] = loadImage("data/summer/accessoires/COQUILLAGE2.png");
        accessoiresListSummer[4] = loadImage("data/summer/accessoires/ETOILE.png");
        accessoiresListSummer[5] = loadImage("data/summer/accessoires/PALMIER.png");
        accessoiresListSummer[6] = loadImage("data/summer/accessoires/PARASOL2.png");
        accessoiresListSummer[7] = loadImage("data/summer/accessoires/SOLEIL.png");
        accessoiresListSummer[8] = loadImage("data/summer/accessoires/SUNSET.png");
        accessoiresListSummer[9] = loadImage("data/summer/accessoires/SURF.png");
        accessoiresListSummer[10] = loadImage("data/summer/accessoires/TRANSAT.png");

        backgroundsListSummer[0] = loadImage('data/summer/bg/CIEL.PNG');
        backgroundsListSummer[1] = loadImage('data/summer/bg/CIEL2.PNG');
        backgroundsListSummer[2] = loadImage('data/summer/bg/CIEL3.PNG');
        backgroundsListSummer[3] = loadImage('data/summer/bg/FOND SUNSET.PNG');
        backgroundsListSummer[4] = loadImage('data/summer/bg/MER.PNG');
        backgroundsListSummer[5] = loadImage('data/summer/bg/SABLE.png');

        principalesListSummer[0] = loadImage('data/summer/principal/ARNOLD.png');
        principalesListSummer[1] = loadImage('data/summer/principal/BITE.png');
        principalesListSummer[2] = loadImage('data/summer/principal/BODY.png');
        principalesListSummer[3] = loadImage('data/summer/principal/BOOBS.png');
        principalesListSummer[4] = loadImage('data/summer/principal/BOUCHE.png');
        principalesListSummer[5] = loadImage('data/summer/principal/CREW.png');
        principalesListSummer[6] = loadImage('data/summer/principal/CUL SHORT.png');
        principalesListSummer[7] = loadImage('data/summer/principal/CUL VELO.png');
        principalesListSummer[8] = loadImage('data/summer/principal/CUL.png');
        principalesListSummer[9] = loadImage('data/summer/principal/DAVID2.png');
        principalesListSummer[10] = loadImage('data/summer/principal/ESPADON.png');
        principalesListSummer[11] = loadImage('data/summer/principal/FEMME DOS.png');
        principalesListSummer[12] = loadImage('data/summer/principal/LIBERTAD.png');
        principalesListSummer[13] = loadImage('data/summer/principal/MAGNUM.png');
        principalesListSummer[14] = loadImage('data/summer/principal/MAGNUM2.png');
        principalesListSummer[15] = loadImage('data/summer/principal/MEUFS.png');
        principalesListSummer[16] = loadImage('data/summer/principal/PAMELA.png');
        principalesListSummer[17] = loadImage('data/summer/principal/RICHARD.png');
        principalesListSummer[18] = loadImage('data/summer/principal/TENNIS.png');
        principalesListSummer[19] = loadImage('data/summer/principal/VOLLEY.png');
        principalesListSummer[20] = loadImage('data/summer/principal/WAW.png');

        fontsListSummer[0] = loadImage('data/summer/typo/13.png');
        fontsListSummer[1] = loadImage('data/summer/typo/1.png');
        fontsListSummer[2] = loadImage('data/summer/typo/2.png');
        fontsListSummer[3] = loadImage('data/summer/typo/3.png');
        fontsListSummer[4] = loadImage('data/summer/typo/4.png');
        fontsListSummer[5] = loadImage('data/summer/typo/5.png');
        fontsListSummer[6] = loadImage('data/summer/typo/6.png');
        fontsListSummer[7] = loadImage('data/summer/typo/7.png');
        fontsListSummer[8] = loadImage('data/summer/typo/8.png');
        fontsListSummer[9] = loadImage('data/summer/typo/9.png');
        fontsListSummer[10] = loadImage('data/summer/typo/10.png');
        fontsListSummer[11] = loadImage('data/summer/typo/11.png');
        fontsListSummer[12] = loadImage('data/summer/typo/12.png');

        accessoiresList = accessoiresListSummer;
        backgroundsList = backgroundsListSummer;
        principalesList = principalesListSummer;
        fontsList = fontsListSummer;
    }
    if (isWinter) {

        accessoiresListWinter[0] = loadImage("data/winter/accessoires/Bonhomme de neige.png");;
        accessoiresListWinter[1] = loadImage("data/winter/accessoires/bonnet.png");;
        accessoiresListWinter[2] = loadImage("data/winter/accessoires/chartreuse.png");;
        accessoiresListWinter[3] = loadImage("data/winter/accessoires/flocon.png");;
        accessoiresListWinter[4] = loadImage("data/winter/accessoires/montagne2.png");;
        accessoiresListWinter[5] = loadImage("data/winter/accessoires/oeufs.png");;
        accessoiresListWinter[6] = loadImage("data/winter/accessoires/piste.png");;
        accessoiresListWinter[7] = loadImage("data/winter/accessoires/raclette.png");;
        accessoiresListWinter[8] = loadImage("data/winter/accessoires/sapin bleu.png");;
        accessoiresListWinter[9] = loadImage("data/winter/accessoires/skis.png");; 
        // accessoiresListWinter[10] = loadImage("data/winter/accessoires/DECORS part1.png");; 
        // accessoiresListWinter[11] = loadImage("data/winter/accessoires/DECORS part2.png");; 
        // accessoiresListWinter[12] = loadImage("data/winter/accessoires/NEIGE part1.png");; 

        backgroundsListWinter[0] = loadImage('data/winter/bg/IMG_0071.JPG');
        backgroundsListWinter[1] = loadImage('data/winter/bg/IMG_0072.JPG');
        backgroundsListWinter[2] = loadImage('data/winter/bg/IMG_0073.JPG');
        backgroundsListWinter[3] = loadImage('data/winter/bg/IMG_0074.JPG');
        backgroundsListWinter[4] = loadImage('data/winter/bg/IMG_0075.JPG');
        backgroundsListWinter[5] = loadImage('data/winter/bg/IMG_0076.JPG');
        backgroundsListWinter[6] = loadImage('data/winter/bg/IMG_0077.JPG');

        // backgroundsListWinter[0] = loadImage('data/winter/bg/DECORS part1.PNG');
        // backgroundsListWinter[1] = loadImage('data/winter/bg/DECORS part2.PNG');
        // backgroundsListWinter[2] = loadImage('data/winter/bg/DECORS.PNG');
        // backgroundsListWinter[3] = loadImage('data/winter/bg/IMG_0071.JPG');
        // backgroundsListWinter[4] = loadImage('data/winter/bg/IMG_0072.JPG');
        // backgroundsListWinter[5] = loadImage('data/winter/bg/IMG_0073.JPG');
        // backgroundsListWinter[6] = loadImage('data/winter/bg/IMG_0074.JPG');
        // backgroundsListWinter[7] = loadImage('data/winter/bg/IMG_0075.JPG');
        // backgroundsListWinter[8] = loadImage('data/winter/bg/IMG_0076.JPG');
        // backgroundsListWinter[9] = loadImage('data/winter/bg/IMG_0077.JPG');
        // backgroundsListWinter[10] = loadImage('data/winter/bg/NEIGE part1.PNG');
        // backgroundsListWinter[11] = loadImage('data/winter/bg/NEIGE part2.PNG');
        // backgroundsListWinter[12] = loadImage('data/winter/bg/NEIGE.PNG');

        principalesListWinter[0] = loadImage('data/winter/principal/CAGOLES ALCOOLIQUES.png');
        principalesListWinter[1] = loadImage('data/winter/principal/DIANA.png');
        principalesListWinter[2] = loadImage('data/winter/principal/DUO FOURRURE.png');
        principalesListWinter[3] = loadImage('data/winter/principal/JAMBES PATINS.png');
        principalesListWinter[4] = loadImage('data/winter/principal/LES BRONZES.png');
        principalesListWinter[5] = loadImage('data/winter/principal/LOVE.png');
        principalesListWinter[6] = loadImage('data/winter/principal/mariah carey 2.png');
        principalesListWinter[7] = loadImage('data/winter/principal/SKI H1.png');
        principalesListWinter[8] = loadImage('data/winter/principal/SKI H2.png');
        principalesListWinter[9] = loadImage('data/winter/principal/SKI H3.png');
        principalesListWinter[10] = loadImage('data/winter/principal/SKI H4.png');
        principalesListWinter[11] = loadImage('data/winter/principal/SKI H5.png');
        principalesListWinter[12] = loadImage('data/winter/principal/SKI SEXY 2.png');
        principalesListWinter[13] = loadImage('data/winter/principal/SKI SEXY 3.png');
        principalesListWinter[14] = loadImage('data/winter/principal/SKI SEXY.png');
        principalesListWinter[15] = loadImage('data/winter/principal/TRIO SKI.png');

        fontsListWinter[0] = loadImage('data/winter/typo/1.png');
        fontsListWinter[1] = loadImage('data/winter/typo/2.png');
        fontsListWinter[2] = loadImage('data/winter/typo/3.png');
        fontsListWinter[3] = loadImage('data/winter/typo/4.png');
        fontsListWinter[4] = loadImage('data/winter/typo/5.png');
        fontsListWinter[5] = loadImage('data/winter/typo/6.png');
        fontsListWinter[6] = loadImage('data/winter/typo/7.png');
        fontsListWinter[7] = loadImage('data/winter/typo/8.png');
        fontsListWinter[8] = loadImage('data/winter/typo/9.png');
        fontsListWinter[9] = loadImage('data/winter/typo/10.png');
        fontsListWinter[10] = loadImage('data/winter/typo/11.png');

        accessoiresList = accessoiresListWinter;
        backgroundsList = backgroundsListWinter;
        principalesList = principalesListWinter;
        fontsList = fontsListWinter;
    }
    back = loadImage('data/carte postale back.jpg');
}

function setup() {
    //-----------------------------
    //   Display for User
    //-----------------------------
    createCanvas(750, 500, WEBGL);
    dlButton = createButton('C\'est toi que je veux !');
    dlButton.position(windowWidth / 2 - width / 2, height + 20);
    dlButton.mousePressed(savePostcard);

    newButton = createButton('Give me une autre !');
    newButton.position(windowWidth / 2 + width / 2 - newButton.size().width, height + 20);
    newButton.mousePressed(newPostcard);

    console.log(dlButton.size().width);


    //-----------------------------
    //    Render in HiRes
    //-----------------------------
    render = createGraphics(1500, 1000);//, WEBGL);
    renderBack = createGraphics(1500, 1000);

    accessoires = new Accessories();
    if (isSummer) bg = new Background();
    else bg = new FondColore();


    cadre = new Cadre();
    principal = new Principal();
    typography = new Typography();
    noLoop();
}

function windowResized() {
    dlButton.position(windowWidth / 2 - width / 2, height + 20);
    newButton.position(windowWidth / 2 + width / 2 - newButton.size().width, height + 20);

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
    typography.display(render);
    cadre.displayCadre(render);

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


class Principal {

    constructor() {
        this.principalSelected = [];
        this.nbrPrincipal = 1;
    }

    compose(principalList, render) {
        this.principalSelected = [];
        this.principalSelected[0] = new PImageExtended(random(principalList).get(), render);
        this.principalSelected[0].rotation(QUARTER_PI, render);
    }

    display(render) {
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
        this.translate = createVector(random(this.rotatedW / 2, render.width - this.rotatedW / 2), random(this.rotatedH / 2, render.height - this.rotatedH / 2));
    }

    rotation(rotate, render) {
        this.rotate = random(-rotate / 2, rotate / 2);;
        this.computeNewDIm(render);
    }

    displayTrail() {
    }

    translate(){
        this.translate = createVector(random(render.width), random(render.height));
    }

    scale(sc, render) {
        this.sc = sc;
        this.img.resize(int(this.sc * this.img.width), 0);
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



class Cadre {

    constructor() {
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

    compose(render) {
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

    displayFond(render) {

        render.push();
        render.imageMode(CORNER);
        render.beginShape();
        render.noStroke();
        //fill(this.rUpLeft, this.gUpLeft, this.bUpLeft);
        render.fill(random(255), random(255), random(255))
        render.vertex(0, 0);

        //fill(this.rUpRight, this.gUpRight, this.bUpRight);
        render.fill(random(255), random(255), random(255));
        render.vertex(render.width, 0);

        render.fill(random(255), random(255), random(255))
        render.vertex(render.width, render.height);

        render.fill(random(255), random(255), random(255))
        render.vertex(0, render.height);
        render.endShape(CLOSE);
        render.pop();
    }

    displayCadre(render) {

        let r = random(255);
        let g = random(255);
        let b = random(255);
        render.push();
        render.imageMode(CORNER);

        render.beginShape();
        render.strokeWeight(50);
        render.fill(0, 0);

        render.stroke(this.rCadre, this.gCadre, this.bCadre)
        render.vertex(0, 0);

        render.stroke(this.rCadre, this.gCadre, this.bCadre)
        render.vertex(render.width, 0);

        render.stroke(this.rCadre, this.gCadre, this.bCadre)
        render.vertex(render.width, render.height);

        render.stroke(this.rCadre, this.gCadre, this.bCadre)
        render.vertex(0, render.height);

        render.endShape(CLOSE);
        render.pop();
    }
}


class Background {

    constructor() {
        this.bgSelected = [];
        this.nbrBG = 1;
    }

    compose(bgList, render) {
        this.bgSelected = [];
        this.bgSelected[0] = new PImageExtended(random(bgList).get(), render);
        //this.bgSelected[0].rotation(TWO_PI, render);
    }

    display(render) {
        this.bgSelected[0].display(render);
    }
}


class FondColore {

    constructor() {

        this.fondSelected = [];
        this.nbrFond = 1;
    }

    compose(fondList) {

        this.fondSelected = [];
        this.fondSelected[0] = random(fondList);
    }

    display(render) {
        render.push();
        render.imageMode(CORNER);
        render.image(this.fondSelected[0], 0, 0);
        render.pop();
    }
}


class Accessories {
    constructor() {
        this.imgSelected = [];
    }

    compose(imgList, render) {
        this.imgSelected = [];

        let nbrAccess = random(2) + 3;

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