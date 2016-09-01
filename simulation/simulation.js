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
    console.log(timestamp);
    context.clearRect(0, 0, 1440, 900);
    circle.setPosition(circle.position.setX(circle.position.x + 1));
    // console.log(circle.position);
    circle.draw(context)
    window.requestAnimationFrame(step);
}
