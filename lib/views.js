/**
 * Show functions to be exported from the design doc.
 */

 exports.pages_by_order = {
    map: function (doc) {
        if (doc.type === 'page') {
            emit(doc.ordering, {"title": doc.title, "slug": doc.slug});
        }
    }
};

exports.pages_by_slug = {
    map: function (doc) {
        if (doc.type === 'page') {
            emit([doc.slug],null);
        }
    }
};
