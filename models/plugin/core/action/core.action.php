<?php
/**
 * Main actions of {{plugin_name}}
 *
 * @author You <you@mail>
 * @since 0.1.0
 * @version 0.1.0
 * @copyright 2017+
 * @package {{plugin_name | underscore}}
 */

namespace {{plugin_name | underscore | lowercase}};

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Main actions of {{plugin_name}}
 */
class Core_Action {

	/**
	 * Constructor
	 *
	 * @since 0.1.0
	 * @version 0.1.0
	 */
	public function __construct() {
		add_action( 'admin_enqueue_scripts', array( $this, 'callback_admin_enqueue_scripts' ), 11 );
	}

	/**
	 * Init style and script
	 *
	 * @since 0.1.0
	 * @version 0.1.0
	 *
	 * @return void nothing
	 */
	public function callback_admin_enqueue_scripts() {
		wp_enqueue_style( '{{plugin_name | lowercase}}-backend-style', PLUGIN_{{plugin_name | underscore | uppercase}}_URL . 'core/asset/css/style.css', array(), \eoxia\Config_Util::$init['{{plugin_name | lowercase}}']->version );
		wp_enqueue_script( '{{plugin_name | lowercase}}-backend-script', PLUGIN_{{plugin_name | underscore | uppercase}}_URL . 'core/asset/js/backend.min.js', array(), \eoxia\Config_Util::$init['{{plugin_name | lowercase}}']->version );
	}
}

new Core_Action();
