/**
 * Show functions to be exported from the design doc.
 */

exports.pages_by_slug = {
    map: function (doc) {
        if (doc.type === 'page') {
            emit(doc.slug, doc);
        }
    }
};
