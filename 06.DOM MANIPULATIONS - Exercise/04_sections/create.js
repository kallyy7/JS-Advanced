function create(sentences) {

    for (let i = 0; i < sentences.length; i++) {
        let createElement = $('<div>');
        let p = $('<p>');

        p.text(sentences[i]);
        p.css("display", "none");

        createElement.append(p);
        createElement.on('click', function() {
            p.css("display", "block");
        });

        $('#content').append(createElement);
    }

}