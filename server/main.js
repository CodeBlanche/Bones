Meteor.startup(function () {
});

Meteor.methods({
    callme : function (number) {
        console.log('call me on : ' + number);
    }
});
