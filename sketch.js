//Create variables here
var dog, happyDog, database, foodS, foodStock

function preload()
{
  dogImg = loadImage("images/dogImg.png")
 
}



function setup() {
	createCanvas(500, 500);
  happyDog = loadImage ("images/dogImg1.png")
  dog = createSprite (200,200,10,10);

  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);
  dog.addImage(dogImg)
  dog.scale = 0.3
  if (keyDown("UP_ARROW")){
    writeStock(foodS);
    dog.addImage (happyDog);
  }
  textSize(20);
  fill("white");
  text ("Food Left", foodStock, 200,100);
  drawSprites();
  //add styles here
  

}

function writeStock(x){
  if (x<=0){
    x = 0
  }
  else {
    x = x-1;
  }

  database.ref ('/').update({
    Food:x
  })
}

function readStock (data){
  foodS=data.val();
}


