"use strict";

const program              = require('commander');
const plugin               = require('./plugin');
const moduleO              = require('./module');
const NewCommand           = require('../commands/new.js').cmd;
const GenerateCommand      = require('../commands/generate.js').cmd;
const GenerateModelCommand = require('../commands/generate-model.js').cmd;

var pathCLI =  __dirname + '\\..\\';
pathCLI     = pathCLI.replace( /\\/g, '/');

/**
 * Switch componentValue to found the good task to make.
 *
 * @since 0.3.0
 * @version 0.3.0
 *
 * @param  {string} componentValue Can be "module", "model".
 * @return {void}
 */
function generate(componentValue) {
	switch( componentValue ) {
		case 'module':
			GenerateCommand.run(pathCLI, plugin.getPluginSlug(process.cwd()), program.args[0]);
			break;
		case 'model':
			if ( moduleO.inModule(process.cwd()) ) {
				GenerateModelCommand.run(pathCLI, plugin.getPluginSlug(process.cwd()), process.argv[4]);
			} else {
				console.log('Not in module');
			}
			break;
		default:
			console.log('Command error: type eo-framework-cli -h');
			break;
	}

}

program
	.version('0.3.0')
	.option('new [name]', 'Create new WordPress Plugin with EO-Framework')
	.option('generate [component] [name]', 'Create new Module in your WordPress plugin', generate)
	.parse(process.argv);

if (program.new) {
	NewCommand.run(pathCLI, program.new);
}
