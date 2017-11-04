extractor = require('unfluff-without-node');

data = extractor.lazy($("html").html());
console.log(data.title());
console.log(data.softTitle());
console.log(data.text());
console.log(data.image());
console.log(data.videos());

  