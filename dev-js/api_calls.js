const getSummary = function fGetSummary(text_body, text_title, sentence_amount) {
  return $.ajax({
    async: false,
    url: 'https://api.aylien.com/api/v1/summarize',
    type: 'get',
    headers: {
      'X-AYLIEN-TextAPI-Application-Key': '21414e5ff02cdcda8b8b97005b79027f',
      'X-AYLIEN-TextAPI-Application-ID': 'b7ff715b',
    },
    data: {
      text: text_body,
      title: text_title,
      sentences_number: sentence_amount,
    },
  }).responseJSON.sentences;
};

// console.log(getSummary('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'IETUI', 1));
