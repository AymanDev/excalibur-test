import { Input } from "excalibur";
import Entity from "./entity";

class Player extends Entity {
  private speed = 10;
  private jumpForce = 50;

  public update(engine, delta) {
    super.update(engine, delta);
    if (engine.input.keyboard.isHeld(Input.Keys.A)) {
      this.pos.x -= this.speed;
    }
    if (engine.input.keyboard.isHeld(Input.Keys.D)) {
      this.pos.x += this.speed;
    }
    if (engine.input.keyboard.isHeld(Input.Keys.Space) && this.onGround) {
      this.pos.y -= this.jumpForce;
      this.onGround = false;
    }
  }
}

export default Player;
