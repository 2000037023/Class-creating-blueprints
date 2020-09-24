class Ground {
    // constructor() function is invoked whenever a new object is
    //made using the Box class blueprint.
      constructor(x, y, width, height) {
    // We use "this" to refer to the object created using this class.
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
    };