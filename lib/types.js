/**
 * Kanso document types to export
 */

var Type = require('couchtypes/types').Type,
    fields = require('couchtypes/fields'),
    widgets = require('couchtypes/widgets');

exports.page = new Type('page', {
    fields: {
        title: fields.string(),
        // empty slug field maps to homepage
        slug: fields.string(),
        body: fields.string({
            widget: widgets.textarea({cols: 40, rows: 10})
        }),
        ordering: fields.number(),
        template: fields.string(),
        audit: {
            // add prev revisions field ?
            created: fields.createdTime(), // timestamp to created?
            //updated: fields.number(), // add modified field?
            created_by: fields.creator(), // creator field?
            //updated_by: fields.string() // add updator field?
        }
    }
});
