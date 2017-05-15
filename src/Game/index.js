"use strict";

const Terminal = require('./Terminal');

class Game {

    constructor() {}

    /**
     * Initializes the game.
     */
    init() {
        console.log('Game.init()');

        Terminal.init();
        // TODO: Add after proper exit/escape handling was added.
        // Terminal.lock();
    }

    /**
     * Starts the game.
     */
    start() {
        console.log('Game.start()');
    }

    /**
     * Exits the game.
     */
    exit() {
        console.log('Game.exit()');

        Terminal.unlock();

        // Add a 100ms delay, so the terminal will be ready when the process effectively exit, 
        // preventing bad escape sequences drop. More:
        // https://github.com/cronvel/terminal-kit/blob/db54f607cb46b74fbfc9b3fafddea868a545c5cc/sample/resize.js#L53)
        setTimeout(
            () => { process.exit(); }, 
            100
        );
    }
};

module.exports = new Game();