import {Actor, CollisionType, Color, Engine, PreCollisionEvent} from "excalibur";

class Entity extends Actor {
  onGround = false;
  gravity = 2;

  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
    this.collisionType = CollisionType.Active;
    this.on("precollision", this.onPreCollision);
  }

  public onPreCollision(event: PreCollisionEvent) {
    if (event.side === "Bottom") {
      this.onGround = true;
    }
  }

  public update(engine: Engine, delta: number): void {
    if (!this.onGround) {
      this.pos.y += this.gravity;
    }
  }
}

export default Entity;
