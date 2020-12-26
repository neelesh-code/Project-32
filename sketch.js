const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2, ground3, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10,box11,box12, box13, box14, box15, box16;
var polygon1, sling1;

var backgroundImg

var bg="White Background.png"

var score=0;


function preload(){

    getBackgroundImage();
}

function setup(){

    createCanvas(1300, 700);
	
	engine = Engine.create();

    world = engine.world;



    ground1=new Ground(650,height-4,1300,5);

    //tower1

    ground2=new Ground(600, 450,300,5);
    
    box1= new Box(487.5, 412.5, 75,75);
    box2= new Box(562.5, 412.5, 75,75);
    box3= new Box(637.5, 412.5, 75,75);
    box4= new Box(712.5, 412.5, 75,75);

    box5= new Box2(525, 337.5, 75,75);
    box6= new Box2(600, 337.5, 75,75);
    box7= new Box2(675, 337.5, 75,75);

    box8= new Box3(562.5, 262.5, 75,75);
    box9= new Box3(637.5, 262.5, 75,75);

    box10= new Box2(600, 187.5, 75,75);

    //tower2

    ground3=new Ground(1000,400,300,5);

    box11= new Box2(925, 362.5, 75,75);
    box12= new Box2(1000, 362.5, 75,75);
    box13= new Box2(1075, 362.5, 75,75);

    box14= new Box3(962.5, 287.5, 75,75);
    box15= new Box3(1037.5, 287.5, 75,75);

    box16= new Box2(1000,212.5, 75,75);

    //polygon

    polygon1= new Polygon(150, 400, 50);

    //slingshot

    sling1= new Slingshot(polygon1.body, {x: 200,y: 300})


}

function draw(){
    Engine.update(engine);

    if(backgroundImg){
        background(backgroundImg);
    }

    rectMode(CENTER);
    


    

    fill("pink")
    textSize(30)
    text("SCORE: "+ score,1050,40)

    ground1.display();

    //tower1

    ground2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();

    box5.display();
    box6.display();
    box7.display();

    box5.score();
    box6.score();
    box7.score();

    box8.display();
    box9.display();

    box8.score();
    box9.score();

    box10.display();
    box10.score();

    //tower2

    ground3.display();

    box11.display();
    box12.display();
    box13.display();

    box11.score();
    box12.score();
    box13.score();

    box14.display();
    box15.display();

    box14.score();
    box15.score();

    box16.display();
    box16.score();

    //polygon

    polygon1.display();

    //slingshot

    sling1.display();

    

    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling1.fly();
}

function keyPressed(){

    if(keyCode===32){
        sling1.attach(polygon1.body);
    }
}




async function getBackgroundImage(){

    var time= await fetch("http://worldtimeapi.org/api/timezone/America/New_York")

    var timeJSON=await time.json();

    var datetime=timeJSON.datetime

    var hour=datetime.slice(11,13);
    

    if(hour>=4 && hour <=18){
        bg="White Background.png"
    }

    else{
        bg="Black Background.png"
    }

    backgroundImg=loadImage(bg);

}
