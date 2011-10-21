/**
 * Rewrite settings to be exported from the design doc
 */

module.exports = [
    {from: '/static/*', to: 'static/*'},
    {from: '/', to: '_list/page_list/pages_by_order'},
    {from: '/page/:slug', to: '_list/page/pages_by_slug', query: {
        limit: '1',
        key: [':slug'],
        include_docs: 'true'
    }},
    {from: '*', to: '_show/not_found'}
];
