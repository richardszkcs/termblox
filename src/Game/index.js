"use strict";

const path = require('path');

const Logger   = require('./Logger'),
      Terminal = require('./Terminal');

class Game {

    constructor() {}

    /**
     * Initializes the game.
     */
    init() {
        Logger.init(Game.LOG_PATH);
        
        Logger.log('Game.init()');

        Terminal.init();
        // TODO: Add after proper exit/escape handling was added.
        // Terminal.lock();
    }

    /**
     * Starts the game.
     */
    start() {
        Logger.log('Game.start()');
    }

    /**
     * Exits the game.
     */
    exit() {
        Logger.log('Game.exit()');

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

/**
 * @type {string}
 */
Game.LOG_PATH = path.normalize(__dirname + '/../../logs');

module.exports = new Game();