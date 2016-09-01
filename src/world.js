/**
 * World class for engine.
 */

/**
 * Constructor. Initializes the body list and set physical constants.
 */
function World() {
    this.bodies = [];
}

World.prototype = {

    /**
     * Add a body to the world.
     */
    addBody: function(body) {
        this.bodies.push(body);
    }
};
