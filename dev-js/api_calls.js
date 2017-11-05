function call(textargs, sentence_amount) {
    
    const response = $.ajax({
            async: false,
            url: "https://api.aylien.com/api/v1/summarize",
            headers: {
                "X-AYLIEN-TextAPI-Application-Key": "21414e5ff02cdcda8b8b97005b79027f",
                "X-AYLIEN-TextAPI-Application-ID": "b7ff715b"
            },
            data: {
                "text": textargs,
                "sentences_number": sentence_amount,
            }
    });

    const json = JSON.parse(response);
    return json.sentences;
}

console.log(call('YO' + 'By default, all requests are sent asynchronously (i.e. this is set to true by default). If you need synchronous requests, set this option to false. Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation. Note that synchronous requests may temporarily lock the browser, disabling any actions while the request is active.', 5));