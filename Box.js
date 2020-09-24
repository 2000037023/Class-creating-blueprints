class Box {
    // constructor() function is invoked whenever a new object is
    //made using the Box class blueprint.
      constructor(x, y, width, height) {
    // We use "this" to refer to the object created using this class.
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
          var angle = this.body.angle;
        var pos =this.body.position;
        //push() -> captures the new setting.
        push();
        //translate() -> to change the 0 of the axis to a given x and y position.
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
        //pop() -> reverts to the old setting.

        pop();
      }
    };