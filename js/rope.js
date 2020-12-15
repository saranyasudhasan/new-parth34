class Sling{
  constructor(bodyA,pointB){
      var option = {
          bodyA:bodyA,
          pointB:pointB,
          stiffness:1,
          angularStiffness:1,
          lenght:220
      }
      this.pointB = pointB
      this.pointX = bodyA.x
      this.pointY = bodyA.y
      this.sling = Constraint.create(option) 
      World.add(world,this.sling)
  }
  show(){
    if (this.sling.bodyA){
        let pointA = this.sling.bodyA.position
        let pointB = this.sling.pointB
        push()
        strokeWeight(3.5)
        stroke("#fff")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()
    }
  }
}