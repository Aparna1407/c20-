var fixedrect, movingrect;

function setup() {
  createCanvas(800,400);
 fixedrect= createSprite(400, 200, 50, 50);

 movingrect= createSprite(600,200,50,100);
}

function draw() {
  background("pink"); 
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 && 
  fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 ){
    fixedrect.shapeColor="red"
    movingrect.shapeColor="red"
  }
  else{
    fixedrect.shapeColor="green"
    movingrect.shapeColor="green"
  }
  console.log(movingrect.x-fixedrect.x)
  drawSprites();
}