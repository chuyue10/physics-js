/**
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
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    circle.draw(context);
    console.log(world);
}
