var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car
var form, player, game;
var ambulanceGroup, busGroup, tramGroup

function preload(){
  backgroundImage = loadImage("track.png")
  carImage = loadImage("car.png")
  ambulanceImage = loadImage("ambulance.png")
  track2Image = loadImage("track 2.png");
  trackImage = loadImage("trackMain.jpg");
  carRightImage = loadImage("carRight.png")
  tramImage = loadImage("tram.png")
  busImage =loadImage("bus.png")
  carLeftImage = loadImage("carLeft.png")
  carDownImage = loadImage("carDown.png")


}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-120);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  ambulanceGroup = new Group()
  tramGroup = new Group()
  busGroup =new Group()
}


function draw(){
  if(gameState === 1){
    clear();
    game.play();
  }
}
