/**
 * List functions to be exported from the design doc.
 */

var templates = require('duality/templates');


exports.page_list = function (head, req) {

    log('calling page list');
    log(head);

    start({code: 200, headers: {'Content-Type': 'text/html'}});

    // fetch all the rows
    var page, pages= [];

    while (page = getRow()) {
        pages.push(page);
    }

    // generate the markup for a list of pages
    var content = templates.render('page_list.html', req, {
        pages: pages
    });

    return {title: 'Page Index', content: content};

};

exports.page = function (head, req) {

    start({code: 200, headers: {'Content-Type': 'text/html'}});
    
    // fetch row and set page.
    var row = [];
    var page;
    if (row = getRow()) {
    	page = row.doc
    }
    else {
        return {
    	    title: '404 - Not Found',
	        content: templates.render('404.html', req, {})
    	};
    }

    // generate the markup for the pages
    var content = templates.render(page.template, req, {
        page: page
    });

    return {title: page.title, content: content};

};
