class Bumper{
    constructor(x,y,img){
        var options = {
            isStatic: true,
            friction: 1.0,
            density: 1.0 
        }

        this.x = x;
        this.y = y;

        if(img == 1){

            this.image = loadImage("bumper.png");
            
        }else if(img == 0){
            
            this.image = loadImage("bumper2.png");
        
        }


        this.body = Bodies.circle(x,y,25,options);
        World.add(world,this.body);
    }

    display(){
        push();
        translate(this.x,this.y);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
    }
}