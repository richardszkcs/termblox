"use strict";

const format = require('string-template');

/**
 * @type {string}
 */
const __VERSION_TEMPLATE = 'v{version}';

/**
 * @type {number}
 */
const __VERSION_GAP_X = 1;

/**
 * @type {number}
 */
const __VERSION_GAP_Y = 1;

class TerminalVersion {

    /**
     * @param {Terminal} terminal The terminal class.
     * @param {string}   version  The game version.
     */
    constructor(terminal, version) {
        /**
         * @private
         */
        this._terminal = terminal;

        /**
         * @private
         */
        this._version = version;
    }

    /**
     * Prints the current game version on the terminal.
     */
    printVersion() {
        const term   = this._terminal,
              width  = term.getWidth(),
              height = term.getHeight();
        
        const verStr = format(
            __VERSION_TEMPLATE,
            {
                version: this._version,
            }
        );

        const verStrLen = verStr.length;

        term
            .move(width - verStrLen - __VERSION_GAP_X, height - __VERSION_GAP_Y)
            .print(verStr)
            ;
    }
}

module.exports = TerminalVersion;