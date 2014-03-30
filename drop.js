/**
 * Hookable events:
 *
 * - ondragenter
 * - ondragover
 * - ondragleave
 * - ondrop
**/

(function (root, nameSpace, factory) {
    if (!root[nameSpace]) {
        root[nameSpace] = {};
    }
    root[nameSpace].drop = factory;

    if (typeof define === 'function' && define.amd) {
        define(factory);
    }
}(this, 'FileJS', function () {
    var cancelEvent = function (e) {
            e.preventDefault();
            e.stopPropagation();
            e.dataTransfer.dropEffect = 'copy';
        };

    return function (element, config) {
        var timer,
            on = function (event, handler) {
                element.addEventListener(event, function (e) {
                    cancelEvent(e);
                    handler(e);
                }, false);
            };

        if (window.File && window.FileList) {
            if (typeof config.ondragenter === 'function') {
                on('dragenter', function (e) {
                    timer = setTimeout(function () {
                        config.ondragenter(e);
                    });
                });
            }

            if (typeof config.ondragover === 'function') {
                on('dragover', config.ondragover);
            }

            if (typeof config.ondragleave === 'function') {
                on('dragleave', function (e) {
                    if (timer) {
                        clearTimeout(timer);
                        timer = undefined;
                    } else {
                        config.ondragleave(e);
                    }
                });
            }

            if (typeof config.ondrop === 'function') {
                on('drop', function (e) {
                    Array.prototype.forEach.call(e.dataTransfer.files, config.ondrop);
                });
            }
        }
    };
}));
