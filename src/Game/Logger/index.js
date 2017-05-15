"use strict";

const fs   = require('fs'),
      path = require('path');

const tracer = require('tracer');

/**
 * @class
 */
const Logger = {

    /**
     * Initializes the logger. 
     * 
     * @param {string} logPath The path of the log file. 
     */
    init: (logPath) => {
        const file = path.normalize(logPath + '/log.txt');

        // delete the log file
        fs.writeFileSync(file, '');

        const _logger = tracer.console({
            transport: (data) => {
                fs.appendFile(
                    file, 
                    data.rawoutput + '\n', 
                    (error) => {
                        if (error) { 
                            throw error; 
                        }
                    }
                );
            }
        });

        // after initialization, assign the actual logger function of tracer 
        // to properly display file names and lines
        Logger.log = _logger.log;
    },

    /**
     * Logs the given message.
     * 
     * @param {string} message The message to log.
     */
    log: null,
};

module.exports = Logger;