//Create variables here
var dog,foodstock
var happydog,database
var foodS
var remaining=20
function preload()
{
  happydog=loadImage("images/dogImg1.png")
  dog1=loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,300,20,20)
  dog.addImage(dog1,250,300)
  dog.scale=0.2
  database=firebase.database()
  foodstock=database.ref("Food")
  foodstock.on("value",read,writeStock)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happydog,250,300)
}
  drawSprites();
  //add styles here
  fill("yellow")
  textSize(15)
text("Note:Press Up_Arrow key to feed drago milk!",100,30)

fill("yellow")
  textSize(15)
text("Food remaining: "+ foodS,180,200)
}
function read(data){
foodS=data.val()
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
database.ref("/").update({
  Food:x
})
}



