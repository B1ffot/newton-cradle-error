class Bob{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.radius = radius;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,this.radius ,options);
        
        
        //this.image.scale = 2.5;
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        
        
        pop();


    }
}