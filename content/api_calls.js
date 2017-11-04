function call(textargs, sentence_amount) {


    var promise_return = function(textargs, sentence_amount) {


        return Promise.resolve($.ajax({
            url: "https://api.aylien.com/api/v1/summarize",
            headers: {
                "X-AYLIEN-TextAPI-Application-Key": "21414e5ff02cdcda8b8b97005b79027f",
                "X-AYLIEN-TextAPI-Application-ID": "b7ff715b"
            },
            data: {
                "text": textargs,
                "sentences_number": sentence_amount,
            }

        }));


    }


    try {
        let data = await promise_return;
        var obj = JSON.parse(data);
        return obj.sentences;
    } catch (error) {
        console.log('Error:', error);
    }

}