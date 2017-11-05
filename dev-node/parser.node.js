extractor = require('unfluff-without-node');

$('body').ready(function() {
    data = extractor.lazy($("body").html());
    plane = data.text();
    plane.replace('.','. ');
    plane.replace('\n',' ');
    return(plane);
});