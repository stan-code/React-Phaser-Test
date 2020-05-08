import React from 'react'
import Phaser from 'phaser'
import { preload, create, update } from './testScene'

export default class Game extends React.Component {
      componentDidMount() {
        const config = {
          type: Phaser.AUTO,
          width: 960,
          height: 960,
          physics: {
            default: "arcade",
            arcade: {
              gravity: { y: 0 },
              debug: false,
            },
          },
          scene: {
            preload: preload(),
            create: create(),
            update: update()
          }
        };
        new Phaser.Game(config);
      }

      shouldComponentUpdate() {
        return false;
      }

      render() {
        return (
          <div id="phaser-game">
            <h3>Game Component</h3>
          </div>
        );
      }
    }

// export default Game