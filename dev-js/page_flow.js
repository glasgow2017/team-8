function findAndReplace(searchText, replacement, searchNode) {
    if (!searchText || typeof replacement === 'undefined') {
        // Throw error here if you want...
        return;
    }
    var regex = typeof searchText === 'string' ?
        new RegExp(searchText, 'g') : searchText,
        childNodes = (searchNode || document.body).childNodes,
        cnLength = childNodes.length,
        excludes = 'html,head,style,title,link,meta,script,object,iframe';
    while (cnLength--) {
        var currentNode = childNodes[cnLength];
        if (currentNode.nodeType === 1 &&
            (excludes + ',').indexOf(currentNode.nodeName.toLowerCase() + ',') === -1) {
            arguments.callee(searchText, replacement, currentNode);
        }
        if (currentNode.nodeType !== 3 || !regex.test(currentNode.data)) {
            continue;
        }
        var parent = currentNode.parentNode,
            frag = (function() {
                var html = currentNode.data.replace(regex, replacement),
                    wrap = document.createElement('div'),
                    frag = document.createDocumentFragment();
                wrap.innerHTML = html;
                while (wrap.firstChild) {
                    frag.appendChild(wrap.firstChild);
                }
                return frag;
            })();
        parent.insertBefore(frag, currentNode);
        parent.removeChild(currentNode);
    }
}


$('body').ready(function() {
    displayTopBanner();

    const strPageText = extractTextFromPage($('body'));
    const strPageImage = extractImageFromPage($('body'));

    //const sentences = getSummary(strPageText, 'Page text', 4); // TMP
    const sentences = ["US President Donald Trump has arrived in Japan at …ietnam and the Philippines also on his itinerary.", "President Trump arrived at the Yokota US Air Force base west of Tokyo on Sunday morning.", "Bilateral meetings with Mr Abe↵↵Tuesday, 7 Novembe…South Korea for talks with President Moon Jae-in.", "Mr Trump will also address the National Assembly↵↵… gathering that includes the US, India and Russia"]; // TMP
    console.log(sentences);

    if (strPageImage != undefined || $.isEmptyObject(strPageImage)) {
        const image_tags = getImageTags(strPageImage);

    }

    $(document).ready(function() {
        var html = '<ul>';
        const $body = $('body');
        for (var i = 0; i < sentences.length; i++) {

            findAndReplace(sentences[i], '<a name="Sentence"' + i + '"/a');

            html += '<li>' + sentences[i] + '</li>';

        }
        html += '</ul>';
        $('#t8-cfg_header').prepend(html);

        if (image_tags != undefined) {

            var image_desc = "This image may contain : "

            for (var k = 0; k < image_tags.length; k++) {

                if (image_tags[i].confidence > 0.35) {

                    image_desc += image_tags[i] + " ";

                }
            }

        }

    });
});