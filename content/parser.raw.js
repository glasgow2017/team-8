extractor = require('unfluff-without-node');

data = extractor.lazy($("html").html());
console.log(data.title());
console.log(data.softTitle());
console.log(data.date());
console.log(data.copyright());
console.log(data.author());
console.log(data.publisher());
console.log(data.text());
console.log(data.image());
console.log(data.tags());
console.log(data.videos());
console.log(data.canonicalLink());
console.log(data.lang());
console.log(data.description());
console.log(data.favicon());
  