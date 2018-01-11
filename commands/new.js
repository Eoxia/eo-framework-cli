/**
 * Create new WordPress plugin with EO-Framework.
 *
 * @since 0.1.0
 * @version 0.2.0
 */
"use strict";

const nrc  = require('node-run-cmd');
const file = require('../lib/file');
const fs   = require('fs');
const ncp  = require('ncp').ncp;

// Used by NRC.
var options = {
	cwd: '',
};

const NewCommand = {

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
	 * The absolute path to the cloned plugin
	 *
	 * @type {string}
	 */
	 pluginPath: '',

	/**
	 * Execute create plugin.
	 *
	 * @since 0.1.0
	 * @version 0.2.0
	 *
	 * @param  {string} pathCLI    Absolue terminal path.
	 * @param  {string} pluginName The plugin name.
	 * @return {void}
	 */
	run: function(pathCLI, pluginName) {
		this.pathCLI    = pathCLI;
		this.pluginName = pluginName;
		options.cwd     = process.cwd().replace( /\\/g, '/');

		this.createPluginDir();
	},

	/**
	 * Create the dir of the plugin.
	 *
	 * @since 0.1.0
	 * @version 0.2.0
	 *
	 * @return {void}
	 */
	createPluginDir: function() {
		nrc.run('mkdir ' + this.pluginName, options).then((exitCodes) => {
			options.cwd += "/" + this.pluginName;
			options.cwd  = options.cwd.replace( '\\', '/' );

			this.gitCloneFrameworkStarter();
		}, function(err) {
			console.log('Command failed to run with error: ', err);
		});
	},

	/**
	 * Copy ./models/plugin in the current CLI path.
	 *
	 * @since 0.1.0
	 * @version 0.2.0
	 *
	 * @return {void}
	 */
	gitCloneFrameworkStarter: function() {
		ncp(this.pathCLI + '/models/plugin/', options.cwd, (err) => {
			if (err) {
				return console.error(err);
			}
			this.pluginPath = options.cwd;

			this.replaceValueInFiles();
		});
	},

	replaceValueInFiles: function() {
		var newConfig = fs.readFileSync( this.pathCLI + "/commands/new.config.json", 'utf8' );
		newConfig     = JSON.parse(newConfig);

		for (var key in newConfig.filesToParse) {
			newConfig.filesToParse[key] = this.pluginPath + '/' + newConfig.filesToParse[key];
		}

		file.openListFileAndOverwrite(newConfig.filesToParse, this.pluginName);
	}
};

exports.cmd = NewCommand;
