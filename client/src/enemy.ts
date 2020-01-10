import Entity from "./entity";
import { Timer } from "excalibur";

class Enemy extends Entity {
  moveTimer: Timer;
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
    // Use this instead just this.moveRandomDirection, cuz this will refer to timer not enemy class
    this.moveTimer = new Timer(() => this.moveRandomDirection(), 1000, true);
  }

  public moveRandomDirection() {
    if (Math.random() > 0.75) {
      this.pos.y -= 50;
      this.onGround = false;
    }

    if (Math.random() > 0.5) {
      this.pos.x += 50;
      return;
    }
    this.pos.x -= 50;
  }

  public update(engine, delta): void {
    super.update(engine, delta);
    this.moveTimer.update(delta);
  }
}

export default Enemy;
