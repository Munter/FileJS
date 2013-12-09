# FileJS

A collection of small decoupled javascript AMD modules for file input and upload.


# RequireJS config

``` javascript
require.config({
    paths: {
        file: 'path/to/FileJS'
    }
});

require(['file/drop'], function (drop) {
    drop(document.getElementById('dropzone'), function (file) {
        console.log(file);
    });
});
```

# Modules

## drop

A function that makes a html element accept file drop events. It takes a `htmlElement` and a `callback` as arguments. `callback` is called with a `File` object for each dropped file.

### Example
``` javascript
require(['file/drop'], function (drop) {
    drop(document.getElementById('dropzone'), function (file) {
        console.log(file);
    });
});
```

## input

A function to get `File` objects in a callback when the value of a file input is updated. It takes a `htmlElement` and a `callback` as arguments. `callback` is called with a `File` object for each dropped file.

There is a third optional argument, a fallback function for browsers that don't support the file API, which is called with the file input itself as an argument.

### Example
``` javascript
require(['file/input'], function (input) {
    input(document.getElementById('fileinput'), function (file) {
        console.log(file);
    }, function (input) {
        console.log(input);
    });
});
```

# License and Copyright
Copyright: Peter Müller 2013
License: MIT


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/Munter/filejs/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

