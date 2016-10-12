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
     * @param  {Number} timestep the time delta between this and the previous   step
     * @return {void}            no return
     */
    step: function(timestep) {

        // update location
        this.updatePositions();

        // collision resolution

    },

    /**
     * Updates the position of all bodies in the world.
     * @param  {Number} timestep the time delta between this and the previous step
     * @return {void}            no return
     */
    updatePositions: function(timestep) {
        for (var i = 0; i < this.bodies.length; i++) {
            console.log(this.bodies[i]);
        }
    }
};
