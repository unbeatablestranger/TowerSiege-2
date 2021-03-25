class Block{
    constructor(x,y,width,height)
    {
        var options={
            friction: 0,
            restitution: 0.3,
            density: 0.8,
        }

        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.visibility = 255;
        this.image = loadImage("block.png");
    }

    display()
    {
        var pos = this.body.position;
        var angle  = this.body.angle;


        if(this.body.speed<7)
        {
            imageMode(CENTER);
            image(this.image,pos.x,pos.y,this.width,this.height);

        }else{
            World.remove(world, this.body);
            push()
            this.visibility = this.visibility  - 5;
            tint(255, this.visibility);
            image(this.image,this.body.position.x, this.body.position.y, this.width, this.height)
            pop();
        }

        
        
    }
}