/**
 *
 *
 * Start the simulation when the window loads.
 */
window.onload = function() {
    var world = new World();
    var circle = new Body().addShape(
        new Circle(
            new Vector(50, 50),
            50,
            0
        )
    );
    world.addBody(circle);
    console.log(world);
}
