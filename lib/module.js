/**
 * Module object
 *
 * @since 0.3.0
 * @version 0.3.0
 */
"use strict";

const fs = require('fs');

/**
 * Vérifie que la console soit bien éxécuter dans un module.
 *
 * @since 0.3.0
 * @version 0.3.0
 *
 * @return {bool} True or false.
 */
exports.inModule = function(path) {
	var pluginSlug;

	var files = fs.readdirSync(path);
	for (var i = 0; i < files.length; i++) {
		if ( files[i].indexOf( '.config.json' ) > 0 ) {

			pluginSlug = files[i].split('.');
			pluginSlug = pluginSlug[0];
			break;
		}
	}

	if ( ! pluginSlug ) {
		return false;
	}

	var content = fs.readFileSync(path + '/' + pluginSlug + '.config.json', 'utf8');
	content     = JSON.parse(content);

	if ( content.modules ) {
		return false;
	}

	return true;
};
