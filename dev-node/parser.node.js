extractor = require('unfluff-without-node');

global.extractTextFromPage = function fExtractTextFromPage($body) {
  data = extractor.lazy($body.html());
  plane = data.text();
  plane.replace('.', '. ');
  plane.replace('\n', ' ');
  return (plane);
};
