import { Actor, CollisionType, Color, Engine, Scene } from "excalibur";
import Player from "./player";
import Enemy from "./enemy";

const game = new Engine({
  width: 800,
  height: 600
});

const level = new Scene(game);
const player = new Player(200, 200, 100, 100, Color.Red);
const enemy = new Enemy(400, 200, 100, 100, Color.White);
const plane = new Actor(500, 300, 1000, 20, Color.Blue);
plane.collisionType = CollisionType.Fixed;
level.add(plane);
level.add(enemy);
level.add(player);
game.add("level", level);
game.start();
game.goToScene("level");
