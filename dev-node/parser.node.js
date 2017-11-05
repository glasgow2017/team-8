extractor = require('unfluff-without-node');

global.extractTextFromPage = function fExtractTextFromPage() {
  text = extractor.lazy($("body").text());
  text.replace('.','. ');
  text.replace('\n',' ');
  return text;
}