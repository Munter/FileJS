require.config({
    paths: {
        file: '../'
    }
});

require(['file/drop'], function (drop) {
    drop(document.getElementById('dropzone'), function (file) {
        console.log(file);
    });
});

require(['file/input'], function (input) {
    input(document.getElementById('fileinput'), function (file) {
        console.log(file);
    }, function () {
        console.log('fallback', arguments);
    });
});
