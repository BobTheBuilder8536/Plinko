class Particle{
    constructor(x,y,radius){
        var options = {
            restitution: 0.4,
            friction: 0.5,
            density: 1.0
        }

        var randomCol = Math.round(random(1,6));
        this.col;
    
        switch (randomCol){
            case 1: this.col = "#5b55e4";
            break;
    
            case 2: this.col = "#97fc94";
            break;
    
            case 3: this.col = "#5a7bc6";
            break;
    
            case 4: this.col = "#cfa897";
            break;
    
            case 5: this.col = "#9ec411";
            break;
    
            default: this.col = "#dc8af6";
            break;
        }

        this.r = radius;
        
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }

    display(){
        push();

        var pos = this.body.position;

        fill(this.col);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r*2,this.r*2);
        pop();
    }
}