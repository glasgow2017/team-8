function getSummary(text_body, text_title, sentence_amount) {

    $.ajax({
        url: "https://api.aylien.com/api/v1/summarize",
        type: "get",
        headers: {
            "X-AYLIEN-TextAPI-Application-Key": "21414e5ff02cdcda8b8b97005b79027f",
            "X-AYLIEN-TextAPI-Application-ID": "b7ff715b"
        },
        data: {
            "text": text_body,
            "title": text_title,
            "sentences_number": sentence_amount,
        },
        success: function(response) {
            var data = JSON.parse(response);
            return data.sentences;
        },
        error: function(xhr) {
            console.log(xhr.error);
            return;
        }

    });


}