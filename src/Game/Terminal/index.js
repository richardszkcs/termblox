"use strict";

const terminal = require('terminal-kit').terminal;

class Terminal {

    constructor() {
        this._terminal = terminal;
    }

    /**
     * Clears the terminal's screen.
     */
    clear() {
        this._terminal.clear();
    }

    /**
     * Locks the terminal screen and input.
     */
    lock() {
        this._terminal.fullscreen(true);
        this._terminal.grabInput({
            mouse: 'button', 
            focus: true 
        });
    }

    /**
     * Unlocks the terminal screen and output.
     */
    unlock() {
        this._terminal.fullscreen(false);
        this._terminal.grabInput(false);
    }
}

module.exports = new Terminal();