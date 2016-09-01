/**
 * Circle class to be attached to Bodies.
 */

/**
 * Constructor.
 * @param {Vector} offset the offset from the position of the main body
 * @param {Number} radius the radius of the circle
 * @param {Number} angle the rotation offset from the main body
 */
function Circle(offset, radius, angle) {
    this.offset = offset;
    this.radius = radius;
    this.angle = angle;
    return this;
}

Circle.prototype = {

    /**
     * Draw the circle at the position and angle on the context.
     * @param  {Vector} position the position on the canvas
     * @param  {Number} angle the angle in canvas
     * @param  {context} context the graphics context of the canvas
     * @return {void} no return
     */
    draw: function(position, angle, context) {
        context.beginPath();
        context.arc(position.x, position.y, this.radius, 0, 2 * Math.PI);
        context.stroke();
    }
};
