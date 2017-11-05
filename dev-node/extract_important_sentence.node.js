const sum = require('sum');

const anotherBigString = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const abstract = sum({
  /**
   * `corpus`: String - is the string you want to summarize
   */
  corpus: anotherBigString,

  /**
   * `nSentences`: Number - controls the number of sentences from the original text included in the abstact
   */
  nSentences: 3,

  /**
   * `nWords`: Number - controls the length in words of the nGram output. Output might be larger as some words are ignored in the algorithm but present in the abstract, for ex. prepositions. When `nWords` is set, `nSentences` is ignored
   */
  nWords: 5,

  /**
   * `exclude`: Array[String] - sum.js allows you to exclude from the final abstract, sentences or nGrams that contain any of the words in the `exclude` param
   */
  exclude: ['polar', 'bear'],

  /**
   * `emphasise`: Array[String] - forces sum.js to include in the summary the sentences or nGrams that contain any the words specified by `emphasise` param.
   */
  emphasise: ['magic'],
});

// `abstract` is an object with format {'sentences':Array<String>, 'summary':String} where summary is just the concatenation of the sentences, for convenience.
// console.log("The short version of corpus is: ", abstract.summary);

// $('body').ready(function () {
//   console.log($('body').text());
// });
