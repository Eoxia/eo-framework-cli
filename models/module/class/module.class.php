<?php
/**
 * Class of {{module_name}} module.
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
 * Class of {{module_name}} module.
 */
class {{module_name | tolowercase | firstcharuppercase | underscore}}_Class extends \eoxia\Singleton_Util {
	protected function construct() {}
}

{{module_name | tolowercase | firstcharuppercase | underscore}}_Class::g();
