"use strict";

const program = require('commander');
const NewCommand = require('../commands/new.js').cmd;

var pathCLI =  __dirname + '\\..\\';
pathCLI     = pathCLI.replace( /\\/g, '/');

program
	.version('1.0.0')
	.option('new [name]', 'Create new WordPress Plugin with EO-Framework')
	.parse(process.argv);

if ( program.new ) {
	NewCommand.run(pathCLI, program.new);
}

// const assert  = require('assert');
// const program = require('commander');
// const nrc     = require('node-run-cmd');
// const fs      = require('fs');
// const ncp     = require('ncp').ncp;
// const path    = require('path');
//
// program
// 	.version('1.0.0')
// 	.option('new [name]', 'Create new WordPress Plugin with EO-Framework')
// 	.option('generate [component] [name]', 'Generate a module')
// 	.parse(process.argv);
//
// var pathCLI =  __dirname + '\\..\\';
// pathCLI = pathCLI.replace( /\\/g, '/');
// var options = {
// 	"cwd": pathCLI
// }
//
// if (program.new) {
// 	options.cwd = process.cwd().replace( /\\/g, '/');
// 	nrc.run('mkdir ' + program.new, options).then(function(exitCodes) {
// 		options.cwd += "/" + program.new;
// 		options.cwd = options.cwd.replace( '\\', '/' );
// 		GitCloneFrameworkStarter();
// 	}, function(err) {
// 		console.log('Command failed to run with error: ', err);
// 	});
// }
//
// if ('module' === program.generate && program.args[0]) {
// 	options.cwd = process.cwd().replace( /\\/g, '/');
//
// 	var pluginSlug = GetPluginSlug();
// 	var name = program.args[0];
//
// 	ncp(pathCLI + '/models/modules', options.cwd + '/modules/' + name, function (err) {
// 		if (err) {
// 			return console.error(err);
// 		}
//
// 		UpdateFileContentModule(options.cwd + '/modules/' + name + '/action/module.action.php', pluginSlug, name);
// 		UpdateFileContentModule(options.cwd + '/modules/' + name + '/class/module.class.php', pluginSlug, name);
// 		UpdateFileContentModule(options.cwd + '/modules/' + name + '/view/main.view.php', pluginSlug, name);
// 		UpdateConf(options.cwd + '/modules/' + name + '/module.config.json', pluginSlug, name);
//
// 		fs.renameSync(options.cwd + '/modules/' + name + '/action/module.action.php', options.cwd + '/modules/' + name + '/action/' + name + '.action.php' );
// 		fs.renameSync(options.cwd + '/modules/' + name + '/class/module.class.php', options.cwd + '/modules/' + name + '/class/' + name + '.class.php' );
// 		fs.renameSync(options.cwd + '/modules/' + name + '/asset/js/module.backend.js', options.cwd + '/modules/' + name + '/asset/js/' + name + '.backend.js' );
// 		fs.renameSync(options.cwd + '/modules/' + name + '/module.config.json', options.cwd + '/modules/' + name + '/' + name + '.config.json' );
//
// 		AddModuleInMainConf(options.cwd + '/' + pluginSlug + '.config.json', name );
//
// 		console.log( 'Module created: ' + name );
// 	});
// }
//
// function GitCloneFrameworkStarter() {
// 	nrc.run('git clone https://github.com/Eoxia/eo-framework-starter ./', options).then(function(exitCodes) {
//
// 		UpdateFileContent(options.cwd + '/starter.php');
// 		UpdateFileContent(options.cwd + '/starter.config.json');
// 		UpdateFileContent(options.cwd + '/core/action/core.action.php');
// 		UpdateFileContent(options.cwd + '/module/hello-world/action/hello-world.action.php');
// 		UpdateFileContent(options.cwd + '/module/hello-world/view/main.view.php');
//
// 		nrc.run('rm -rf .git', options).then(function(exitCodes) {
// 			nrc.run('git init', options).then(function(exitCodes) {
// 				GitCloneFramework();
// 			}, function(err) {
// 				console.log('Command failed to run with error: ', err);
// 			});
// 		}, function(err) {
// 			console.log('Command failed to run with error: ', err);
// 		});
// 	}, function(err) {
// 		console.log('Command failed to run with error: ', err);
// 	});
// }
//
// function GitCloneFramework() {
// 	nrc.run('git submodule add https://github.com/Eoxia/eo-framework core/external/eo-framework', options).then(function(exitCodes) {
// 		fs.renameSync(options.cwd + '/starter.php', options.cwd + '/' + program.new.toLowerCase().replace( ' ', '_' ) + '.php');
// 		fs.renameSync(options.cwd + '/starter.config.json', options.cwd + '/' + program.new.toLowerCase().replace( ' ', '_' ) + '.config.json');
// 		console.log('Wordpress plugin generated: ' + program.new);
// 	}, function(err) {
// 		console.log('Command failed to run with error: ', err);
// 	});
// }
//
// function UpdateFileContent(pathFile) {
// 	fs.readFile(pathFile, 'utf8', function(err, data) {
// 		if (err) {
// 			return console.log(err);
// 		}
//
// 		var result = data.replace(/EO Framework Starter/g, program.new);
// 		result     = result.replace(/eo-framework-starter/g, program.new.toLowerCase().replace( ' ', '-') );
		// result     = result.replace(/MY_PLUGIN/g, program.new.toUpperCase().replace( ' ', '_' ));
// 		result     = result.replace(/MY_PLUGIN/g, program.new.toUpperCase().replace( '-', '_' ));
// 		result     = result.replace(/my_plugin/g, program.new.toLowerCase().replace( ' ', '_' ));
// 		result     = result.replace(/my_plugin/g, program.new.toLowerCase().replace( '-', '_' ));
// 		result     = result.replace(/Starter/g, program.new);
// 		result     = result.replace(/starter/g, program.new.toLowerCase().replace( ' ', '_' ));
// 		result     = result.replace(/starter/g, program.new.toLowerCase().replace( '-', '_' ));
//
// 		fs.writeFile(pathFile, result, 'utf8', function (err) {
// 			if (err) return console.log(err);
// 		});
//
// 		return true;
// 	});
// }
//
//
// function UpdateFileContentModule(pathFile, pluginSlug, value) {
// 	var data = fs.readFileSync(pathFile, 'utf8');
//
// 	value = value.toLowerCase();
//
// 	var result = data.replace(/"Module"/g, value.charAt(0).toUpperCase() + value.slice(1));
// 	result     = result.replace(/Module/g, value.charAt(0).toUpperCase() + value.slice(1));
// 	result     = result.replace(/"module"/g, value.toLowerCase().replace( ' ', '_' ) );
// 	result     = result.replace(/"module"/g, value.toLowerCase().replace( '-', '_' ) );
// 	result     = result.replace(/\/module/g, value.toLowerCase().replace( ' ', '_' ) );
// 	result     = result.replace(/\/module/g, value.toLowerCase().replace( '-', '_' ) );
// 	result     = result.replace(/Module/g, value.charAt(0).toUpperCase() + value.slice(1));
// 	result     = result.replace(/my_plugin/g, pluginSlug.toLowerCase().replace( ' ', '_' ));
// 	result     = result.replace(/my_plugin/g, pluginSlug.toLowerCase().replace( '-', '_' ));
//
// 	fs.writeFileSync(pathFile, result, 'utf8');
//
// 	return true;
// }
//
// function UpdateConf(pathFile, pluginSlug, value) {
// 	var data = fs.readFileSync(pathFile, 'utf8');
//
// 	value = value.toLowerCase();
//
// 	var result = data.replace(/"Module"/g, '"' + value.charAt(0).toUpperCase() + value.slice(1) + '"');
// 	result     = result.replace(/"module"/g, '"' + value.toLowerCase().replace( ' ', '_' ) + '"' );
// 	result     = result.replace(/"module"/g, '"' + value.toLowerCase().replace( '-', '_' ) + '"' );
// 	result     = result.replace(/\/module/g, '/' + value.toLowerCase().replace( ' ', '_' ) );
// 	result     = result.replace(/\/module/g, '/' + value.toLowerCase().replace( '-', '_' ) );
//
// 	fs.writeFileSync(pathFile, result, 'utf8');
//
// 	return true;
// }
//
// function GetPluginSlug() {
// 	var pluginSlug;
//
// 	var files = fs.readdirSync(options.cwd);
// 	for (var i = 0; i < files.length; i++) {
// 		if ( files[i].indexOf( '.config.json' ) > 0 ) {
//
// 			pluginSlug = files[i].split('.');
// 			pluginSlug = pluginSlug[0];
// 			break;
// 		}
// 	}
//
// 	return pluginSlug;
// }
//
// function AddModuleInMainConf(mainConfPath, name) {
// 	var data = fs.readFileSync(mainConfPath, 'utf8');
// 	data = JSON.parse(data);
// 	data.modules.push('module/' + name + '/' + name + '.config.json');
//
// 	fs.writeFileSync(mainConfPath, JSON.stringify(data, null, "\t"), 'utf8');
//
// 	return true;
// }
