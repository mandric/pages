/**
 * Show functions to be exported from the design doc.
 */

var templates = require('duality/templates');

exports.not_found = function (doc, req) {
    return {
        title: '404 - Not Found',
        content: templates.render('404.html', req, {})
    };
};
