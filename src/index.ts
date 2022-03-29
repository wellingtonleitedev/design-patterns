import GameSettings from "./creational/singleton";
import player from "./creational/prototype";
import HotDog from "./creational/builder";

/**
 * Creational patterns start
 */

const gameSettings = GameSettings.getInstance();
gameSettings.player = player;

const completHotDog = new HotDog("wheat").addKetchup().addMostard().addKurst();

const hotDogWithoutMostard = new HotDog("gluten free").addKetchup().addKurst();

console.log("[CREATIONAL PATTERNS START]");
console.log({
  creational: {
    playerMovement: gameSettings.player.movePlayerTo(),
    playerName: gameSettings.player.name,
    completHotDog,
    hotDogWithoutMostard,
  },
});
console.log("[CREATIONAL PATTERNS END]");

/* Creational patterns end */
