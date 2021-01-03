class Box1 {
  constructor(x, y){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':0.1
  }
  this.body = Bodies.rectangle(x,y,40,50,options);
  World.add(world, this.body);
  this.visibility=255
  }
  display(){
    push()
   if(this.body.speed<3){
    fill("lightblue")
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,40,50);
    }

    else{
      
      World.remove(world,this.body)
      this.visibility=this.visibility-5
      
    }
    pop()
  }
  score(){
    if (this.visibility<0&&this.visibility>-105){
      score++
    }
};
};
