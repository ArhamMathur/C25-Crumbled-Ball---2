class Paper
{
    constructor(x, y,radius) 
    {
        var options = 
        {
            'isStatic': false,
            'restitution':0.2,
            'friction':0.5,
            'density':1.1,
            
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      } 

      display()
      {
        //var angle = this.body.angle;
        //push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        fill(200,15,0);
        image(this.image, this.body.position.x,this.body.position.y ,this.radius*2, this.radius*2 );
        pop();    
      }
}