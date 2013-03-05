define(function () {
    return function (fileInput, callback, fallback) {
        fileInput.onchange = function (e) {
            e = e || window.event;
            var target = e.target || e.srcElement,
                files = e.target && e.target.files,
                i;

            if (files) {
                for (i = 0; i < files.length; i += 1) {
                    callback(files[i]);
                }
            } else if (fallback) {
                fallback(e);
            }
        };
    };
});
