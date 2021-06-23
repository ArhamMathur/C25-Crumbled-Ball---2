class Dustbin{
    constructor(x, y, width, height) {
        var options = {
            // 'restitution':0.0,
            // 'friction':1.0,
            // 'density':1.0,
            "isStatic":true,
          }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
        World.add(world, this.body);
      }
      display(){
        //var angle = this.body.angle;
        //push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        rectMode(CENTER);
        imageMode(CENTER);
        //fill(100,80,900);
        //rect(this.body.position.x,this.body.position.y,this.width,this.height)
        image(this.image,800,500,180,180);
         pop();
      }
}