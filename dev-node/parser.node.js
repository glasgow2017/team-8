extractor = require('unfluff-without-node');

const extractReadableTextFromPage = function extractTextFromPage() {
    $('body').ready(function() {
        data = extractor.lazy($("body").html());
        plane = data.text();
        plane.replace('.','. ');
        plane.replace('\n',' ');
        return(plane);
    });
}