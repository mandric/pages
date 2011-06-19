/**
 * Kanso document types to export
 */

var Type = require('kanso/types').Type,
    fields = require('kanso/fields'),
    widgets = require('kanso/widgets');


exports.page = new Type('page', {
    fields: {
        title: fields.string(),
        // empty slug field maps to homepage
        slug: fields.string({required: false}),
        body: fields.string({
            widget: widgets.textarea({cols: 40, rows: 10})
        }),
        ordering: fields.number(),
        template: fields.string(),
        audit: {
            // add prev revisions field ?
            created: fields.timestamp(), // timestamp to created?
            //updated: fields.number(), // add modified field?
            created_by: fields.creator(), // creator field?
            //updated_by: fields.string() // add updator field?
        }
    }
});
