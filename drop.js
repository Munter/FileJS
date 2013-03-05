define([
    'file/fileapi'
], function (fileapi) {
    var cancelEvent = function (e) {
            e.preventDefault();
            e.stopPropagation();
            e.dataTransfer.dropEffect = 'copy';
        };

    return function (element, callback) {
        if (fileapi) {
            element.addEventListener('dragover', cancelEvent, false);
            element.addEventListener('dragenter', cancelEvent, false);
            element.addEventListener('drop', function (e) {
                cancelEvent(e);
                Array.prototype.forEach.call(e.dataTransfer.files, callback);
            }, false);
        }
    };
});
