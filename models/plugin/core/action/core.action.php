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
		wp_enqueue_style( 'eo-framework-starter-backend-style', PLUGIN_MY_PLUGIN_URL . 'core/asset/css/style.css', array(), \eoxia\Config_Util::$init['starter']->version );
		wp_enqueue_script( 'eo-framework-starter-backend-script', PLUGIN_MY_PLUGIN_URL . 'core/asset/js/backend.min.js', array(), \eoxia\Config_Util::$init['starter']->version );
	}
}

new Core_Action();
