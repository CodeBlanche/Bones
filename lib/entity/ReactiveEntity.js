/**
 *
 */
ReactiveEntity = function (data) {
    var deps = {};
    var elements = {};

    function resolveDep (name) {
        if (deps[name] === undefined) {
            deps[name] = new Deps.Dependency;
        }

        return deps[name];
    };

    function mutate(name, value) {
        data[name] = value;

        resolveDep(name).changed();
    };

    this.get = function (name) {
        resolveDep(name).depend();

        return data[name];
    };

    this.set = function (name, value) {
        if (value === data[name]) {
            return this;
        }

        if ($ !== undefined && elements[name] !== undefined) {
            var $el = $(elements[name]);

            $el.fadeOut(function () {
                mutate(name, value);

                $el.fadeIn();
            })

            return this;
        }

        mutate(name, value);

        return this;
    }

    this.bindElement = function (name, selector) {
        elements[name] = selector;
    }
};
