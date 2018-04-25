/**
 * Generate module.
 *
 * @since 0.3.0
 * @version 0.3.0
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

const GenerateModel = {

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
		 * The model name.
		 *
		 * @type {string}
		 */
		modelName: '',

		/**
		 * The absolute path to the cloned plugin
		 *
		 * @type {string}
		 */
		 pluginPath: '',

		/**
		 * Model type.
		 *
		 * @type {string}
		 */
		type: '',

		/**
		 * Execute create module.
		 *
		 * @since 0.3.0
		 * @version 0.3.0
		 *
		 * @param  {string} pathCLI    Absolue terminal path.
		 * @param  {string} pluginName The plugin name.
		 * @return {void}
		 */
		run: function(pathCLI, pluginName, modelName, type, forcePath) {
			this.pathCLI    = pathCLI;
			this.pluginName = pluginName;
			this.modelName  = modelName;
			this.type       = type;
			options.cwd     = process.cwd().replace( /\\/g, '/');

			if ( forcePath ) {
				options.cwd += '/modules/' + forcePath;
			}

			this.mkdirFolder();
		},

		mkdirFolder: function() {
			nrc.run('mkdir model class', options).then((exitCodes) => {

				this.cpFiles();

			}, function(err) {
				console.log('Command failed to run with error: ', err);
			});
		},

		cpFiles: function() {
			ncp(this.pathCLI + '/models/model/model.' + this.type + '.class.php', options.cwd + '/class/' + this.modelName + '.class.php', (err) => {
				if (err) {
					return console.error(err);
				}

				ncp(this.pathCLI + '/models/model/model.' + this.type + '.model.php', options.cwd + '/model/' + this.modelName + '.model.php', (err) => {
					if (err) {
						return console.error(err);
					}

					this.replaceValueInFiles();
				});

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
			var files = [
				options.cwd + '/class/' + this.modelName + '.class.php',
				options.cwd + '/model/' + this.modelName + '.model.php'
			];

			file.openListFileAndOverwrite(files, 'plugin_name', this.pluginName);
			file.openListFileAndOverwrite(files, 'model_name', this.modelName);
		},
};

exports.cmd = GenerateModel;
