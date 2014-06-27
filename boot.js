/**
 * Configure the router
 */
Router.configure({
    layoutTemplate   : 'layoutDefault',
    notFoundTemplate : 'err404'//,
//    loadingTemplate: 'loading'
});

/**
 * Perform routing
 */
Router.map(function () {
    this.route('home', { path : '/' });
    this.route('about');
});
