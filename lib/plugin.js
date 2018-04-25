/**
 * Handle plugin func.
 *
 * @since 0.1.0
 * @version 0.3.5
 */
"use strict";

const fs     = require('fs');
const parser = require('./parser');

/**
 * Read the plugin slug in main config.
 *
 * @since 0.1.0
 * @version 0.3.0
 *
 * @param  {string}  path     The plugin path
 * @param  {integer} countTry Number of try for found main config json.
 *
 * @return {string}      Founded plugin slug.
 */
exports.getPluginSlug = function(path, countTry) {
	if ( ! countTry ) {
		countTry = 0;
	}
		var pluginSlug;

		var files = fs.readdirSync(path);
		for (var i = 0; i < files.length; i++) {
			if ( files[i].indexOf( '.config.json' ) > 0 ) {
				var tmp = fs.readFileSync(path + '/' + files[i], 'utf8');
				var tmpJSON = JSON.parse(tmp);
				if ( tmpJSON.modules) {
					pluginSlug = files[i].split('.');
					pluginSlug = pluginSlug[0];
				}
				break;
			}
		}

		if ( ! pluginSlug && countTry < 5 ) {
			countTry++;
			return this.getPluginSlug(path + '/../', countTry);
		}

		return pluginSlug;
};

/**
 * Inc the module in the main conf.
 *
 * @since 0.1.0
 * @version 0.3.5
 *
 * @return {void}
 */
exports.AddModuleInMainConf = function(pluginPath, moduleName) {
	var data = fs.readFileSync(pluginPath, 'utf8');
	data = JSON.parse(data);
	data.modules.push('modules/' + moduleName + '/' + moduleName + '.config.json');

	fs.writeFileSync(pluginPath, JSON.stringify(data, null, "\t"), 'utf8');
};
