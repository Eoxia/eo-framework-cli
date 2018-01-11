/**
 * Parse and replace content in file.
 *
 * @since 0.1.0
 * @version 0.2.0
 */
"use strict";

/**
 * Parses les valeurs suivantes:
 *
 * {{plugin_name}}
 * {{plugin_name | underscore}}
 * {{plugin_name | lowercase}}
 * {{plugin_name | uppercase}}
 * {{plugin_name | underscore | uppercase}}
 * {{plugin_name | underscore | lowercase}}
 *
 * et les remplaces par value.
 *
 * @since 0.1.0
 * @version 0.2.0
 *
 * @param  {string} content Le contenu.
 * @param  {string} value   La chaine de caractère de remplacement.
 * @return {[type]}         Le contenu modifié.
 */
exports.parseAndReplace = function(content, value) {
	var contentParsed = content.match(/\{{ ?(plugin_name) [ a-z\|]+}}/g);
	for(var key in contentParsed) {
		var tmpValue = value;

		if ( contentParsed[key].search(/\| uppercase/g) > 0 ) {
			tmpValue = tmpValue.toUpperCase();
		}

		if ( contentParsed[key].search(/\| lowercase/g) > 0 ) {
			tmpValue = tmpValue.toLowerCase();
		}

		if ( contentParsed[key].search(/\| underscore/g) > 0 ) {
			tmpValue = tmpValue.replace(' ', '_');
			tmpValue = tmpValue.replace('-', '_');
		}

		content = content.replace(contentParsed[key], tmpValue);
	}

	content = content.replace(/{{plugin_name}}/, value);

	return content;
};
