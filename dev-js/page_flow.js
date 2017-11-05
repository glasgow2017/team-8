function findAndReplace(searchText, replacement, searchNode) {
    if (!searchText || typeof replacement === 'undefined') {
        // Throw error here if you want...
        return;
    }
    let regex = typeof searchText === 'string' ?
        new RegExp(searchText, 'g') : searchText,
        childNodes = (searchNode || document.body).childNodes,
        cnLength = childNodes.length,
        excludes = 'html,head,style,title,link,meta,script,object,iframe';
    while (cnLength--) {
        var currentNode = childNodes[cnLength];
        if (currentNode.nodeType === 1 &&
            (`${excludes},`).indexOf(`${currentNode.nodeName.toLowerCase()},`) === -1) {
            arguments.callee(searchText, replacement, currentNode);
        }
        if (currentNode.nodeType !== 3 || !regex.test(currentNode.data)) {
            continue;
        }
        let parent = currentNode.parentNode,
            frag = (function() {
                let html = currentNode.data.replace(regex, replacement),
                    wrap = document.createElement('div'),
                    frag = document.createDocumentFragment();
                wrap.innerHTML = html;
                while (wrap.firstChild) {
                    frag.appendChild(wrap.firstChild);
                }
                return frag;
            }());
        parent.insertBefore(frag, currentNode);
        parent.removeChild(currentNode);
    }
}

function getDescription() {
    var metas = document.getElementsByTagName('meta');

    for (var i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute("name") == "description") {
            return metas[i].getAttribute("content");
        }
    }

    return "";
}

$('body').ready(function() {
    displayTopBanner();

    const strPageText = extractTextFromPage($('body')).substring(0, 2000);
    const strPageImage = extractImageFromPage($('body'));

    assert(strPageText != null, "Page extraction returned NULL");
    assert(strPageImage != null, "Image extraction returned NULL");

    var sentences = escape(getSummary(strPageText, 'Page text', 4));

    //console.log(sentences);

    if (0 === sentences.length) {
        sentences.push(getDescription());
    }



    $(document).ready(function() {
        console.log(sentences);
        var html = '<ul>';
        const $body = $('body');
        var out = sentences[0];
        for (var i = 1; i < sentences.length; i++) {
            out += ' ' + sentences[i];
        }

        $('#t8-cfg_summary').text(out);
    });

    if (strPageImage != undefined || $.isEmptyObject(strPageImage)) {
        const image_tags = getImageTags(strPageImage);

    }


});