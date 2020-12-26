class Stone {
    constructor (x, y, width, height){
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.x = x;
        this.y= y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);

        this.image = loadImage("Plucking mangoes/stone.png");
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        fill("white");
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    }
}