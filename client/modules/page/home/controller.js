HomeController = RouteController.extend({

    layoutTemplate : 'layoutDefault',

    template : 'home',

//    onBeforeAction: function () {
//    },

//    onAfterAction: function () {
//    },

//    waitOn: function () {
//        return Meteor.subscribe('post', this.params._id);
//    },

    data : function () {
        // data available in template.
        return {
            greeting : 'greetings',
            heading  : 'headings',
        };
    },

    action : function () {
        // this i kinda redundant. Specifying a template to render change the default behaviour.
        this.render();
    }
});
