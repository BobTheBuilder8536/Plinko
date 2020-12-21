class Wall {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }

      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;

      this.block = loadImage("block.png");
      this.wall = loadImage("wall.png");

      this.wallBody = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.wallBody);

      if(width > height){
        this.length = height * 3;

        this.block1 = Bodies.circle(x - width/2,y,this.length/2,options);
        World.add(world, this.block1);
  
        this.block2 = Bodies.circle(x + width/2,y,this.length/2,options);
        World.add(world, this.block2);
      } else if(height > width){
        this.length = width * 3;

        this.block1 = Bodies.circle(x,y - height/2,this.length/2,options);
        World.add(world, this.block1);
  
        this.block2 = Bodies.circle(x,y + height/2,this.length/2,options);
        World.add(world, this.block2);
      }

    }
    display(){
      push();
      imageMode(CENTER);
      image(this.wall,this.x,this.y,this.width,this.height);
      image(this.block,this.block1.position.x,this.block1.position.y,this.length,this.length);
      image(this.block,this.block2.position.x,this.block2.position.y,this.length,this.length);
      pop();
    }
  }
