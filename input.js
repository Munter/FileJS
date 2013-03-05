define(function () {
    return function (fileInput, callback, fallback) {
        fileInput.onchange = function (e) {
            if (fileInput.files) {
                Array.prototype.forEach.call(fileInput.files, callback);
            } else if (fallback) {
                fallback(fileInput);
            }
        };
    };
});
