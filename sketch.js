const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render= Matter.Render

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var score=0
var gs="a"
function preload() {
    bg=loadImage("bg.png")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    gameMode();

    g1 = new Ground(600,height,1200,20);
    g2 = new Ground(660,400,350,20)
    g3 = new Ground(900,250,250,20)
    p1= new poly(200,200)
    b1= new Box1(600,370)
    b2= new Box1(600+20,370)
    b3= new Box1(600+40,370)
    b4= new Box1(600+60,370)
    b5= new Box1(600+80,370)
    b6= new Box1(600+100,370)
    b7= new Box1(600+100,370)
    b8= new Box2(600+20,370-25)
    b9= new Box2(600+40,370-25)
    b10= new Box2(600+60,370-25)
    b11= new Box2(600+80,370-25)
    b12= new Box2(600+100,370-25)
    b13= new Box3(600+40,370-25-25)
    b14= new Box3(600+60,370-25-25)
    b15= new Box3(600+80,370-25-25)
    b16= new Box4(600+60,370-25-25-25)
    b17= new Box1(860,220)
    b18= new Box1(860+20,220)
    b19= new Box1(860+40,220)
    b20= new Box1(860+60,220)
    b21= new Box1(860+70,220)
    b22= new Box3(860+20,220-25)
    b23= new Box3(860+40,220-25)
    b24= new Box3(860+50,220-25)
    b25= new Box2(860+35.0000000000000000000000000000000000000000009,220-25-25)
    sling=new Slingshot(p1.body,{x:200,y:200})

    var render = Render.create({ 
        element: document.body, engine: engine, 
        options: { width: 1300, height: 600, wireframes: false } });
       Render.run(render);
      
    
}

function draw(){
    background(bg);
    Engine.update(engine);
    strokeWeight(4);
    textSize(38)
    text("Score="+score,750,40)
    g1.display();
    g2.display();
    g3.display();
    p1.display()
    b1.display()
    b2.display()
    b3.display()
    b4.display()
    b5.display()
    b6.display()
    b7.display()
    b8.display()
    b9.display()
    b10.display()
    b11.display()
    b12.display()
    b13.display()
    b14.display()
    b15.display()
    b16.display()
    b17.display()
    b18.display()
    b19.display()
    b20.display()
    b21.display()
    b22.display()
    b23.display()
    b24.display()
    b25.display()
    b1.score()
    b2.score()
    b3.score()
    b4.score()
    b5.score()
    b6.score()
    b7.score()
    b8.score()
    b9.score()
    b10.score()
    b11.score()
    b12.score()
    b13.score()
    b14.score()
    b15.score()
    b16.score()
    b17.score()
    b18.score()
    b19.score()
    b20.score()
    b21.score()
    b22.score()
    b23.score()
    b24.score()
    b25.score()
   


}
function mouseDragged(){
    if(gs!=="b")
    {Matter.Body.setPosition(p1.body,{x:mouseX,y:mouseY})}
    
  }
  function mouseReleased(){
   Matter.Body.applyForce(p1.body,p1.body.position,{x:50,y:-50})
   sling.birdfly()
   gs="b"
  }

  function keyPressed(){
    if(keyCode===32){
        gs="a"
        Matter.Body.setPosition(p1.body,{x:200,y:200})
        sling.attach(p1.body)
    }
}
async function gameMode(){
    var apinfo=await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo")
    var aj=await apinfo.json()
    var mydt=aj.datetime
    var hour=mydt.slice(11,13)
    if(hour>=06&&hour<=19){
     bg= loadImage("bg.png")
    }

    else{
        bg= loadImage("bg2.jpg")
    }
}
