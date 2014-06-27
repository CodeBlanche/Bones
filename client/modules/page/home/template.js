Template.home.events({
    // sample event to capture .link classes and navigate to the corresponding href attribute.
    'click .link' : function (event) {
        event.preventDefault();

        Router.go($(event.currentTarget).prop('href'));
    }
    // additional template events go here.
});

Template.home.rendered = function () {
    // do something once the dom is ready
}

Template.home.helpers({
    // additional template helper methods go here.
});
