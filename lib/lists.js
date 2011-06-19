/**
 * List functions to be exported from the design doc.
 */

var templates = require('kanso/templates');


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

    log('calling page');
    log(head);

    start({code: 200, headers: {'Content-Type': 'text/html'}});

    var page = getRow().value;

    log(page);

    // generate the markup for a list of pages
    var content = templates.render(page.template, req, {
        page: page
    });

    return {title: page.title, content: content};

};
