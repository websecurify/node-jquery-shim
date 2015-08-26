'use strict'

// ---
// ---
// ---

try {
	module.exports = window.jQuery || {}
} catch (e) {
	try {
		module.exports = require('jquery') || {}
		
		// ---
		
		if (!module.exports.fn) {
			module.exports = window.jQuery || {}
		}
	} catch (e) {
		module.exports = {}
	}
}

// ---
