define(function () {
    if (typeof supportsFileApi !== 'boolean') {
        var input = document.createElement("input");
        input.setAttribute("type", "file");
        supportsFileApi = !!input.files;
    }

    return supportsFileApi;
});
