/**
 * Body class for physics engine.
 * @authors Jensen.
 */

/**
 * Constructor.
 */
function Body() {

    // inertia
    this.mass = 1;
    this.angularInertia = 1;

    // translational
    this.position = new Vector(0, 0);
    this.velocity = new Vector(0, 0);
    this.acceleration = new Vector(0, 0);

    // rotational
    this.angle = new Vector(0, 0, 0);
    this.angularVelocity = new Vector(0, 0, 0);
    this.angularAcceleration = new Vector(0, 0, 0);

    // geometry
    this.shapes = [];

    return this;
}

Body.prototype = {

    /**
     * Adds a shape to the body.
     * @param {Circle, Rectangle} shape aditional component to the body
     */
    addShape: function(shape) {
        this.shapes.push(shape);
        return this;
    },

    /**
     * Draw the shape on the context.
     * @param  {context} context the graphics context of a canvas
     * @return {void} no return
     */
    draw: function(context) {
        for (shape of this.shapes) {
            shape.draw(
                this.position.add(shape.offset),
                this.angle,
                context 
            )
        }
    }
}
