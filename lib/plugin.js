/**
 * Handle plugin func.
 *
 * @since 0.1.0
 * @version 0.2.0
 */
"use strict";

const fs     = require('fs');
const parser = require('./parser');

/**
 * Read the plugin slug in main config.
 *
 * @since 0.1.0
 * @version 0.2.0
 *
 * @param  {string} path The plugin path
 *
 * @return {string}      Founded plugin slug.
 */
exports.getPluginSlug = function(path) {
		var pluginSlug;

		var files = fs.readdirSync(path);
		for (var i = 0; i < files.length; i++) {
			if ( files[i].indexOf( '.config.json' ) > 0 ) {

				pluginSlug = files[i].split('.');
				pluginSlug = pluginSlug[0];
				break;
			}
		}

		return pluginSlug;
};

/**
 * Inc the module in the main conf.
 *
 * @since 0.1.0
 * @version 0.2.0
 *
 * @return {void}
 */
exports.AddModuleInMainConf = function(pluginPath, moduleName) {
	var data = fs.readFileSync(pluginPath, 'utf8');
	data = JSON.parse(data);
	data.modules.push('module/' + moduleName + '/' + moduleName + '.config.json');

	fs.writeFileSync(pluginPath, JSON.stringify(data, null, "\t"), 'utf8');
};
