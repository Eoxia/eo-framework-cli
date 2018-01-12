<?php
/*
Plugin Name: {{plugin_name}}
Plugin URI:
Description:
Version: 0.1.0
Author:
Author URI:
License:
License URI:
*/

namespace {{plugin_name | underscore | lowercase}};

DEFINE( 'PLUGIN_{{plugin_name | underscore | uppercase}}_PATH', realpath( plugin_dir_path( __FILE__ ) ) . '/' );
DEFINE( 'PLUGIN_{{plugin_name | underscore | uppercase}}_URL', plugins_url( basename( __DIR__ ) ) . '/' );
DEFINE( 'PLUGIN_{{plugin_name | underscore | uppercase}}_DIR', basename( __DIR__ ) );

// Include EO_Framework.
require_once 'core/external/eo-framework/eo-framework.php';

// Boot your plugin.
\eoxia\Init_Util::g()->exec( PLUGIN_{{plugin_name | underscore | uppercase}}_PATH, basename( __FILE__, '.php' ) );
