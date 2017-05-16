"use strict";

const __LOGO = require('./logo');

class TerminalLogo {

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
     * Prints the game's logo on the terminal.
     */
    printLogo() {
        const term   = this._terminal,
              width  = term.getWidth(),
              height = term.getHeight();
        
        const maxStrLen = this._getMaxLogoLineLength();

        for (let i = 0, len = __LOGO.length; i < len; i++) {
            term
                .move((width / 2) - (maxStrLen / 2), 10 + i)
                .print(__LOGO[i])
                ;
        }
    }

    /**
     * Returns the length of the longest line of the logo.
     * 
     * @private
     * @returns {number} The length of the longest line of the logo.
     */
    _getMaxLogoLineLength() {
        let maxLen = 0;

        for (let i = 0, len = __LOGO.length, line; i < len; i++) {
            line = __LOGO[i];

            if (line.length > maxLen) {
                maxLen = line.length
            }
        }

        return maxLen;
    }
}

module.exports = TerminalLogo;