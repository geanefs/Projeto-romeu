var dev
var cli

var cli2
var cliimg

var ground

var jogo, jogoimg

function preload(){

    jogoimg = loadImage('imagens/cenarioOriginal.png')
    cliimg = loadAnimation('gifs/personagem principal.gif')
}


function setup() {
    createCanvas(1000,500)

    dev = createSprite(250,400,30,30)

    ground = createSprite(50,490,2000,10)
    ground.visible = false
  

    
    //cli.velocity.x = 5

    //cli2.velocity.x = -5

    jogo = createSprite(250,300,20,20)
   // jogo.addImage(jogoimg)
    jogo.scale = 0.02

 



    
}

function draw(){
    background(jogoimg)

   
    drawSprites()
   

    if(keyIsDown(LEFT_ARROW)){
        dev.position.x -= 10
    }
    if(keyIsDown(RIGHT_ARROW)){
        dev.position.x += 10
    }
    if(keyDown(UP_ARROW)){
        dev.velocityY -= 5
    }

    dev.velocity.y = dev.velocity.y + 0.8

    dev.collide(ground)
    Bird()
   
}


function Bird(){
if(frameCount % 60 === 0){
    var pombo = createSprite(1000,150,10,10);
    pombo.velocityX = -3
    pombo.y = Math.round(random(10,100))
}
}
