"use strict";

const terminal = require('terminal-kit').terminal;
      
const TerminalFrame   = require('./TerminalFrame'),
      TerminalVersion = require('./TerminalVersion'),
      TerminalLogo    = require('./TerminalLogo');

class Terminal {

    constructor() {}

    /**
     * Initializes the terminal.
     * 
     * @param {Object} options Terminal initialization options.
     */
    init(options) {
        /**
         * @private
         */
        this._terminal = terminal;
        
        /**
         * @private
         */
        this._width = terminal.width;
        
        /**
         * @private
         */
        this._height = terminal.height

        /**
         * @private
         */
        this._frame = new TerminalFrame(this);

        /**
         * @private
         */
        this._version = new TerminalVersion(this, options.version);
        
        this._frame.drawFrame();
        this._version.printVersion();
        new TerminalLogo(this).printLogo();

        this.move(50, 35);
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

    /**
     * Returns the current width of the terminal.
     * 
     * @returns {number} The width of the terminal.
     */
    getWidth() {
        return this._width;
    }

    /**
     * Returns the current height of the terminal.
     * 
     * @returns {number} The height of the terminal.
     */
    getHeight() {
        return this._height;
    }

    /**
     * Move the cursor to the given x and y positions.
     * 
     * @param {number} x The x (horizontal) position to move the cursor to.
     * @param {number} y The y (vertical) position to move the cursor to.
     * 
     * @returns {Terminal} The terminal class.
     */
    move(x, y) {
        this._terminal.moveTo(x, y);
        
        return this;
    }

    /**
     * Print the given characters to the terminal.
     * 
     * @param {string} characters The characters to print the terminal on.
     * 
     * @returns {Terminal} The terminal class.
     */
    print(characters) {
        this._terminal(characters);
        
        return this;
    }
}

module.exports = new Terminal();