class Paper{

    constructor (x,y,radius){

        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
           
        }
        this.body = Bodies.circle (x,y,radius,options);
        this.image = loadImage("sprites/unnamed.png");
        World.add(world,this.body);
        this.radius = radius;

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        this.image=this.display
        push ();
        
        translate(pos.x,pos.y);
        rotate (angle);
        
        fill ("red");
        
        ellipseMode(CENTER);
        ellipse(0,0,this.radius);

        pop ();
    }
}
