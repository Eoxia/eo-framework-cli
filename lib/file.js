/**
 * Handle file
 *
 * @since 0.1.0
 * @version 0.2.0
 */
"use strict";

const fs     = require('fs');
const parser = require('./parser');

/**
 * Open list files and replace content, then overwrite the file.
 *
 * @since 0.1.0
 * @version 0.2.0
 *
 * @param  {string} filesPath The path to the files.
 * @param  {string} value     The value to replace.
 *
 * @return {void}
 */
exports.openListFileAndOverwrite = function(filesPath, value) {
	for (var key in filesPath) {
		var content = fs.readFileSync(filesPath[key], 'utf8');
		content = parser.parseAndReplace(content, value);
		fs.writeFileSync(filesPath[key], content);
	}
};
