import { Actor, CollisionType, Engine, PreCollisionEvent } from "excalibur";

class Entity extends Actor {
  onGround = false;
  gravity = 2;
  health = 0;
  maxHealth = 100;
  isDead = false;

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

  public damage(damage, sourceEntity) {
    if (!this.canTakeDamage() || this.isInvincible()) {
      return false;
    }

    this.health -= damage;
    if (this.health <= 0) {
      this.isDead = true;
      this.health = 0;
      this.kill();
    }
    return true;
  }

  public heal(amount) {
    this.health += amount;
    if (this.health > this.maxHealth) {
      this.health = this.maxHealth;
    }
  }

  public isInvincible() {
    return false;
  }

  public canTakeDamage() {
    return true;
  }
}

export default Entity;
