const assert  = require('assert');
const program = require('commander');
const nrc     = require('node-run-cmd');
const fs      = require('fs');

program
	.version('1.0.0')
	.option('generate [name]', 'Plugin name')
	.parse(process.argv);


var options = {
	"cwd": process.cwd().replace( '\\', '/' ),
}

if (program.generate) {
	nrc.run('mkdir ' + program.generate, options).then(function(exitCodes) {
		options.cwd += "/" + program.generate;
		options.cwd = options.cwd.replace( '\\', '/' );
		GitCloneFrameworkStarter();
	}, function(err) {
		console.log('Command failed to run with error: ', err);
	});
}

function GitCloneFrameworkStarter() {
	nrc.run('git clone https://github.com/Eoxia/eo-framework-starter ./', options).then(function(exitCodes) {

		UpdateFileContent(options.cwd + '/starter.php');
		UpdateFileContent(options.cwd + '/starter.config.json');
		UpdateFileContent(options.cwd + '/core/action/core.action.php');
		UpdateFileContent(options.cwd + '/module/hello-world/action/hello-world.action.php');
		UpdateFileContent(options.cwd + '/module/hello-world/view/main.view.php');

		nrc.run('rm -rf .git', options).then(function(exitCodes) {
			nrc.run('git init', options).then(function(exitCodes) {
				GitCloneFramework();
			}, function(err) {
				console.log('Command failed to run with error: ', err);
			});
		}, function(err) {
			console.log('Command failed to run with error: ', err);
		});
	}, function(err) {
		console.log('Command failed to run with error: ', err);
	});
}

function GitCloneFramework() {
	nrc.run('git submodule add https://github.com/Eoxia/eo-framework core/external/eo-framework', options).then(function(exitCodes) {
		fs.renameSync(options.cwd + '/starter.php', options.cwd + '/' + program.generate.toLowerCase().replace( ' ', '_' ) + '.php');
		fs.renameSync(options.cwd + '/starter.config.json', options.cwd + '/' + program.generate.toLowerCase().replace( ' ', '_' ) + '.config.json');
		console.log('Wordpress plugin generated: ' + program.generate);
	}, function(err) {
		console.log('Command failed to run with error: ', err);
	});
}

function UpdateFileContent(pathFile) {
	fs.readFile(pathFile, 'utf8', function(err, data) {
		if (err) {
			return console.log(err);
		}

		var result = data.replace(/EO Framework Starter/g, program.generate);
		result     = result.replace(/eo-framework-starter/g, program.generate.toLowerCase().replace( ' ', '-') );
		result     = result.replace(/MY_PLUGIN/g, program.generate.toUpperCase().replace( ' ', '_' ));
		result     = result.replace(/my_plugin/g, program.generate.toLowerCase().replace( ' ', '_' ));
		result     = result.replace(/Starter/g, program.generate);
		result     = result.replace(/starter/g, program.generate.toLowerCase().replace( ' ', '_' ));

		fs.writeFile(pathFile, result, 'utf8', function (err) {
			if (err) return console.log(err);
		});

		return true;
	});
}
