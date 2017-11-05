const getSummary = function fGetSummary(text_body, text_title, sentence_amount) {
    return $.ajax({
        async: false,
        url: 'https://api.aylien.com/api/v1/summarize',
        type: 'get',
        headers: {
            'X-AYLIEN-TextAPI-Application-Key': 'YOUR KEY',
            'X-AYLIEN-TextAPI-Application-ID': 'YOUR ID',
        },
        data: {
            text: text_body,
            title: text_title,
            sentences_number: sentence_amount,
        },
    }).responseJSON.sentences;
};

const getImageTags = function fgetImageTags(image_url) {

    return $.ajax({
        async: false,
        url: "https://api.aylien.com/api/v1/image-tags",
        type: "get",
        headers: {
            "X-AYLIEN-TextAPI-Application-Key": "YOUR KEY",
            "X-AYLIEN-TextAPI-Application-ID": "YOU ID"
        },
        data: {
            "url": image_url
        }
    }).responseJSON.image_tags.tags;



}