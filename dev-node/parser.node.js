extractor = require('unfluff-without-node');

global.extractTextFromPage = function fExtractTextFromPage($body) {
    data = extractor.lazy($body.html());
    plane = data.text();
    plane.replace('.', '. ');
    plane.replace('\n', ' ');
    return (plane);
}

global.extractImageFromPage = function fExtractImageFromPage($body) {
    var data = extractor($body.html());

    if (data.image != undefined) {

        return data.image;
    } else {
        console.log("Error parsing dom for image");
        return;

    }


}
