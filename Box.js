class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          'isStatic': false
      }


      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility=255;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);



      if(this.body.speed<3){
        rectMode(CENTER);
        strokeWeight(1);
        stroke("grey");
        fill("cyan");
        rect(0, 0, this.width, this.height);
      }
      else{
        
        this.visibility-=1;
        tint(255,this.visibility);
        World.remove(world, this.body);
        
        
      }

      pop();
    }

    score(){
      if(this.visibility<255 && this.visibility>0){
        score++;
      }
    }







  };