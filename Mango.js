class Mango {
    constructor(x, y, width, height){
        var options = {
            isStatic: true,
            restitution: 0.01,
            friction: 0.9,
            density: 0.89
        }
      this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
      this.image = loadImage("Plucking mangoes/mango.png");
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      World.add(world, this.body);
}
display(){
  imageMode(CENTER);
  fill("yellow");
  image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
 }
}