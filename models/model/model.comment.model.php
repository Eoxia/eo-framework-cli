<?php
/**
 * Define schema of {{model_name}}
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
* Handle {{model_name}}
*/
class {{model_name | tolowercase | firstcharuppercase | underscore}}_Model extends \eoxia\Comment_Model {
	public function __construct( $object, $req_method = null ) {

		parent::__construct( $object, $req_method );
	}
}
