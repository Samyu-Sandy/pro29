class SlingShot{
    constructor(bodyA,pointB){
        var options = {
        bodyA : bodyA,
        pointB : pointB,
        stiffness :0.03,
        length :2
        }
       
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
       }
      
       fly(){
           this.sling.bodyA = null;
       }

     display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB
           
           
            stroke("red");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

    }










}