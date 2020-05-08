import React from 'react'
import { Scene } from 'phaser'
import Phaser from 'phaser'

// export default class TestScene extends Scene {
//   render() {
//     return (
//       <div>
//         <h3>TestScene Page</h3>
//       </div>
//     )
//   }

class TestScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
    // // Game control
    // this.control = null;
    // this.cursor = null;

    // // Store map, units list
    // this.currentLevel = null;

    // // Indicate which mode the game is running (select unit, move unit etc)
    // this.currentMode = "";

    // // Index to store player selected unit
    // this.selectedUnit = null;

    // // Variable to store array of possible moving paths in unit moving mode
    // this.possiblePaths = [];
    // this.possibleTiles = [];

    // this.turnSystem = null;

    // this.contextMenu = null;

    // this.transition = null;

    // this.unitOriginalPosition = {};
  }

  preload() {
    this.load.image("warrior", "client/assets/images/warrior.png");
    this.load.image("sky", "client/assets/images/sky.png");
    this.load.image("testmap2", "client/assets/images/testmap2.png");
    this.load.image(
      "testmap2unzoomed",
      "client/assets/images/testmap2unzoomed.png"
    );
    this.load.image("ground", "client/assets/images/platform.png");
    this.load.image("star", "client/assets/images/star.png");
    this.load.image("bomb", "client/assets/images/bomb.png");
    this.load.spritesheet("dude", "client/assets/spritesheets/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    this.add.image(480, 480, "testmap2");
    // this.physics.startSystem(Phaser.Physics.P2JS)
    // this.add.image(480, 480, 'warrior').setOrigin(0, 0)
    // player = this.physics.add.sprite(480, 480, 'warrior')
    // player = this.add.sprite(playerX, playerY, 'warrior')
    cursors = this.input.keyboard.createCursorKeys();
    player = this.physics.add
      .image(playerX, playerY, "warrior")
      .setOrigin(0, 0);
    player.setCollideWorldBounds(true);
    player.setData("notMoving", true);
    // this.physics.p2.enable(player)
  }

  setfixedMovement(val, axis) {
    if (axis === "x") {
      playerX += val;
    } else if (axis === "y") {
      playerY += val;
    }

    player.setPosition(playerX, playerY);
    player.setData("notMoving", false);
    setTimeout(() => {
      player.setData("notMoving", true);
    }, 100);
  }

  update() {
    if (player.getData("notMoving")) {
      if (cursors.left.isDown) {
        setfixedMovement(-48, "x");
      } else if (cursors.right.isDown) {
        setfixedMovement(48, "x");
      } else if (cursors.up.isDown) {
        setfixedMovement(-48, "y");
      } else if (cursors.down.isDown) {
        setfixedMovement(48, "y");
      }
    }
  }
}
