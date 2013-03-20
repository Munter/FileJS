define(function (fileapi) {
    var cancelEvent = function (e) {
            e.preventDefault();
            e.stopPropagation();
            e.dataTransfer.dropEffect = 'copy';
        };

    return function (element, config) {
        var timer;

        if (window.File && window.FileList) {
            element.addEventListener('dragover', function (e) {
                cancelEvent(e);

                if (typeof config.over === 'function') {
                    config.over(e);
                }
            }, false);

            element.addEventListener('dragenter', function (e) {
                cancelEvent(e);

                timer = setTimeout(function () {
                    if (typeof config.enter === 'function') {
                        config.enter(e);
                    }
                });
            }, false);

            element.addEventListener('dragleave', function (e) {
                cancelEvent(e);

                if (timer) {
                    clearTimeout(timer);
                    timer = undefined;
                } else {
                    if (typeof config.leave === 'function') {
                        config.leave(e);
                    }
                }
            }, false);

            element.addEventListener('drop', function (e) {
                cancelEvent(e);

                if (typeof config.drop === 'function') {
                    Array.prototype.forEach.call(e.dataTransfer.files, config.drop);
                }
            }, false);
        }
    };
});
