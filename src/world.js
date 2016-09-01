/**
 * World class for engine.
 */

/**
 * Constructor. Initializes the body list and set physical constants.
 */
function World() {
    this.bodies = [];
    return this;
}

World.prototype = {

    /**
     * Add a body to the world.
     */
    addBody: function(body) {
        this.bodies.push(body);
        return this;
    },

    /**
     * Moves the world forward in time.
     * @return {void} no return.
     */
    step: function() {

    }
};
