/**
 * Rectangle class
 */

/**
 * Constructor.
 * @param {Vector} offset the offset from the position of the main body
 * @param {Number} angle the rotation offset from the main body
 * @param {Number} width the width of the rectangle.
 * @param {Number} height the height of the rectangle.
 */
function Rectangle(offset, width, height, angle) {
    this.offset = offset;
    this.angle = angle;
    this.width = width;
    this.height = height;
    return this;
}

Rectangle.prototype = {

    /**
     * Draw the rectangle at the position and angle on the context.
     * @param  {Vector} position the position on the canvas
     * @param  {Number} angle the angle in canvas
     * @param  {context} context the graphics context of the canvas
     * @return {void} no return
     */
    draw: function(position, angle, context) {
        
    }
}
