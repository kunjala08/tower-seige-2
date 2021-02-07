class Box {
    constructor(x, y) {
      var options = {
        isStatic:false,
        
        'friction': 0.3,
        'restitution':0.2, 
      }
      this.body = Bodies.rectangle(x, y, 25, 50, options);
      this.width = 25;
      this.height = 50;
      this.Visiblity=225;
      World.add(world, this.body);
    }
    display(){
      
      if(this.body.speed < 3){
        var pos = this.body.position;
        rectMode(CENTER)
        fill(rgb(154, 86, 226))
        stroke(rgb(249, 247, 249))
        rect(pos.x, pos.y, this.width, this.height);
       }
      else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         //tint(255,this.Visiblity);
         //rect(this.body.position.x, this.body.position.y, 25, 50);
         pop();
       }
      
    }
  }