/**
 *
 */
var cache = {};

var resolveCollection = function (name) {
    if (cache[name] === undefined) {
        cache[name] = new Meteor.Collection(name);
    }

    return cache[name];
}

collections = {
    User          : resolveCollection('User')
};
