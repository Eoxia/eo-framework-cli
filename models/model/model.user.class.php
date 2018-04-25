<?php
/**
 * Handle {{model_name}}
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
class {{model_name | tolowercase | firstcharuppercase | underscore}}_Class extends \eoxia\User_Class {

	/**
	 * Model name @see ../model/*.model.php.
	 *
	 * @var string
	 */
	protected $model_name = '\{{plugin_name | underscore | lowercase}}\{{model_name | tolowercase | firstcharuppercase | underscore}}_Model';

	/**
	 * Post type
	 *
	 * @var string
	 */
	protected $post_type = '{{model_name | underscore | lowercase}}';

	/**
	 * La clé principale du modèle
	 *
	 * @var string
	 */
	protected $meta_key = '{{model_name | underscore | lowercase}}';

	/**
	 * La route pour accéder à l'objet dans la rest API
	 *
	 * @var string
	 */
	protected $base = '{{model_name | underscore | lowercase}}';

	/**
	 * La taxonomy lié à ce post type.
	 *
	 * @var string
	 */
	protected $attached_taxonomy_type = '';
}

{{model_name | tolowercase | firstcharuppercase | underscore}}_Class::g();
