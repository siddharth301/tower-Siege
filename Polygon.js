class Polygon  {
  constructor(x, y, width, height,angle) {
    var options = {
        'restitution':0.8,
        'frictionAir':0.005,
        'density':0.04
    }
    this.body = Bodies.circle(x, y, width, height, options,5);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipse( 0, 0, this.width, this.height);
    pop();
  }
}