/**
 * Generate module.
 *
 * @since 0.1.0
 * @version 0.2.0
 */
"use strict";

const nrc    = require('node-run-cmd');
const file   = require('../lib/file');
const fs     = require('fs');
const ncp    = require('ncp').ncp;
const plugin = require('../lib/plugin');

// Used by NRC.
var options = {
	cwd: '',
};

const Generate = {

	/**
	 * Absolue terminal path.
	 *
	 * @type {string}
	 */
	pathCLI: '',

	/**
	 * The plugin name.
	 *
	 * @type {string}
	 */
	pluginName: '',

	/**
	 * The module name.
	 *
	 * @type {string}
	 */
	moduleName: '',

	/**
	 * The absolute path to the cloned plugin
	 *
	 * @type {string}
	 */
	 pluginPath: '',

	/**
	 * The absolute path to the cloned module
	 *
	 * @type {string}
	 */
	 modulePath: '',

	/**
	 * Execute create module.
	 *
	 * @since 0.1.0
	 * @version 0.2.0
	 *
	 * @param  {string} pathCLI    Absolue terminal path.
	 * @param  {string} pluginName The plugin name.
	 * @return {void}
	 */
	run: function(pathCLI, pluginName, moduleName) {
		this.pathCLI    = pathCLI;
		this.pluginName = pluginName;
		this.moduleName = moduleName;
		options.cwd     = process.cwd().replace( /\\/g, '/');

		this.cpModule();
	},

	/**
	 * Create the dir of the plugin.
	 *
	 * @since 0.1.0
	 * @version 0.2.0
	 *
	 * @return {void}
	 */
	cpModule: function() {
		ncp(this.pathCLI + '/models/module/', options.cwd + "/modules/" + this.moduleName, (err) => {
			if (err) {
				return console.error(err);
			}
			this.pluginPath = options.cwd;
			this.modulePath = options.cwd + "/modules/" + this.moduleName;

			this.replaceValueInFiles();
			this.renameFiles();
			console.log('Plugin generated: ' + this.modulePath + '/' + this.moduleName);
		});
	},

	/**
	 * Replace value in file listed in new.config.json
	 *
	 * @since 0.1.0
	 * @version 0.2.0
	 *
	 * @return {void}
	 */
	replaceValueInFiles: function() {
		var newConfig = fs.readFileSync( this.pathCLI + "/commands/generate.config.json", 'utf8' );
		newConfig     = JSON.parse(newConfig);

		for (var key in newConfig.filesToParse) {
			newConfig.filesToParse[key] = this.modulePath + '/' + newConfig.filesToParse[key];
		}

		file.openListFileAndOverwrite(newConfig.filesToParse, 'plugin_name', this.pluginName);
		file.openListFileAndOverwrite(newConfig.filesToParse, 'module_name', this.moduleName);
		plugin.AddModuleInMainConf(this.pluginPath + "/" + this.pluginName + ".config.json", this.moduleName);
	},

	/**
	 * Renames file to plugin_name.
	 *
	 * @since 0.1.0
	 * @ersion 0.2.0
	 *
	 * @return {void}
	 */
	renameFiles: function() {
		var newConfig = fs.readFileSync( this.pathCLI + "/commands/generate.config.json", 'utf8' );
		newConfig     = JSON.parse(newConfig);

		for (var key in newConfig.filesToRename) {
			fs.renameSync(this.modulePath + '/' + newConfig.filesToRename[key], this.modulePath + '/' + newConfig.filesToRename[key].replace(/module/g, this.moduleName));
		}
	}
};

exports.cmd = Generate;
