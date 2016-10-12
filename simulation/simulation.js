/**
 * Start the simulation when the window loads.
 */
var world;
var circle;
var canvas;
var context;

window.onload = function() {
    world = new World();
    circle = new Body().addShape(
        new Circle(
            new Vector(0, 0),
            50,
            0
        )
    ).setPosition(new Vector(50, 50));
    world.addBody(circle);
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    circle.draw(context);
    console.log(world);
    window.requestAnimationFrame(step);
}

function step(timestamp) {

    // step the world
    world.step();

    // create canvas and redraw
    context.clearRect(0, 0, 1440, 900);
    for (var i = 0; i < world.bodies.length; i++) {
        world.bodies[i].draw(context)
    }

    // request next frame
    window.requestAnimationFrame(step);
}
