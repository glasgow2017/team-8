extractor = require('unfluff-without-node');

data = extractor.lazy($("html").html());
console.log(data.text());
  