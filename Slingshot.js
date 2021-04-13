class Slingshot {
    constructor(object, point) {
        var options = {
            bodyA: object,
            pointB: point,
            length: 10,
            stiffness: 0.5
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    fly() {
        this.sling.bodyA = null;
    }
    display() {
        if (this.sling.bodyA) {
            var point1 = this.sling.bodyA.position;
            var point2 = this.sling.pointB;
            stroke("white");
            line(point1.x, point1.y, point2.x, point2.y);
        }
    }
    attach(body) {
        this.sling.bodyA = body;
    }
}