"use strict";

class TerminalFrame {

    /**
     * @param {Terminal} terminal The terminal class.
     */
    constructor(terminal) {
        /**
         * @private
         */
        this._terminal = terminal;
    }

    /**
     * Draws the outer frame of the terminal.
     */
    drawFrame() {
        const term   = this._terminal,
              width  = term.getWidth(),
              height = term.getHeight();

        let chars = '',
            i;

        // generate the top and bottom frames
        for (i = 1; i < width - 1; i++) {
            chars += TerminalFrame.FRAME_SYMBOLS.HORIZONTAL;
        }

        term
            // print the top frame
            .move(2, 0)
            .print(chars)
            // print the bottom frame
            .move(2, height)
            .print(chars)
            ;

        const sideChar = TerminalFrame.FRAME_SYMBOLS.VERTICAL;

        // print the left and right frames
        for (i = 2; i < height; i++) {
            term
                // left frame
                .move(0, i)
                .print(sideChar)
                // right frame
                .move(width - 1, i)
                .print(sideChar)
                ;
        }

        // draw corners
        term
            // top left
            .move(0, 0)
            .print(TerminalFrame.FRAME_SYMBOLS.TOP_LEFT_CORNER)
            // top right
            .move(width, 0)
            .print(TerminalFrame.FRAME_SYMBOLS.TOP_RIGHT_CORNER)
            // bottom left
            .move(0, height)
            .print(TerminalFrame.FRAME_SYMBOLS.BOTTOM_LEFT_CORNER)
            // bottom right
            .move(width, height)
            .print(TerminalFrame.FRAME_SYMBOLS.BOTTOM_RIGHT_CORNER)
            ;
    }
}

/**
 * @typedef {Object}
 */
TerminalFrame.FRAME_SYMBOLS = {
    /**
     * @type {string}
     */
    TOP_LEFT_CORNER: '█',
    
    /**
     * @type {string}
     */
    TOP_RIGHT_CORNER: '█',

    /**
    /**
     * @type {string}
     */
    BOTTOM_LEFT_CORNER: '█',
    
    /**
     * @type {string}
     */
    BOTTOM_RIGHT_CORNER: '█',

    /**
     * @type {string}
     */
    HORIZONTAL: '█',

    /**
     * @type {string}
     */
    VERTICAL: '██',
};

module.exports = TerminalFrame;