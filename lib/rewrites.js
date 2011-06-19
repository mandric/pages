/**
 * Rewrite settings to be exported from the design doc
 */

module.exports = [
    {from: '/static/*', to: 'static/*'},
    {from: '/', to: '_list/page_list/pages_by_slug'},
    {from: '/:slug', to: '_list/page/pages_by_slug', query: {key: ':slug'}},
    {from: '*', to: '_show/not_found'}
];
