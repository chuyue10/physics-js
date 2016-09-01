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
