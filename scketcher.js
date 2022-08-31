var dev
var cli

var cli2

var jogo, jogoimg

function preload(){

    //jogoimg = loadImage('assets/game.png.png')

}


function setup() {
    createCanvas(500,500)

    dev = createSprite(250,400,30,30)


    cli = createSprite(250,20,30,30)

    
    cli2 = createSprite(500,20,30,30)

    cli.velocity.x = 5

    cli2.velocity.x = -5

    jogo = createSprite(250,300,20,20)
   // jogo.addImage(jogoimg)
    jogo.scale = 0.02

 



    
}

function draw(){
    background('green')

    if(cli.x > 500){
        cli.x = 0
    }

    if(cli2.x < 1){
        cli2.x = 500
    }
    //cli.bounce()
    drawSprites()


    if(keyIsDown(LEFT_ARROW)){
        dev.position.x -= 10
    }
    if(keyIsDown(RIGHT_ARROW)){
        dev.position.x += 10
    }

}
