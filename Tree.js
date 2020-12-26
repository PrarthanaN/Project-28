class Tree {
    constructor(x, y, width, height){
        var tree_options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, tree_options);
        this.image = loadImage("Plucking mangoes/tree.png")
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y; 
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y + 10);
        fill(255);
        imageMode(CENTER);
        image(this.image, 0, -this.height/2, this.width, this.height);
        pop();
    }
}