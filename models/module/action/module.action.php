<?php
/**
 * Action of {{module_name}} module.
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
 * Action of {{module_name}} module.
 */
class {{module_name | tolowercase | firstcharuppercase | underscore}}_Action {

	/**
	 * Constructor
	 *
	 * @since 0.1.0
	 * @version 0.1.0
	 */
	public function __construct() {}
}

new {{module_name | tolowercase | firstcharuppercase | underscore}}_Action();
