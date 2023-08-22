// Copyright (C) 2023 Alan J. Yu

(function() {
    var quizzes = true;
    var file_preview = true;

    /* files preview page */
    if (file_preview && /\/courses\/[0-9]+\/files\/[^\/]+/.test (location.pathname)) {
        // remove occasional overflow 
        document.querySelector('body').style.overflow = "hidden";

        // remove header text
        document.querySelectorAll('#content h2')[0].remove();

        // turn download text into a button
        let downloadText = document.getElementById('content').getElementsByTagName('div')[0];
        downloadText.classList.add('Button');
        downloadText.style.cssText = 'position: absolute; width: 150px; top: -58px; right: 210px;';
        downloadText.querySelector('span').style.cssText = 'font-size: 1rem;';
        downloadText.querySelector('span > a').innerHTML = 'Download';
        downloadText.querySelector('span > a').style.cssText = 'color: #000; text-decoration: none;';

        // trigger the inner 'a' (download) event once the button is clicked anywhere
        downloadText.addEventListener('click', evt => {
            downloadText.querySelector('span > a').click();
        });
        downloadText.querySelector('span').addEventListener('click', evt => {
            downloadText.querySelector('span > a').click();
        });

    }


    /* quizzes page */
    else if (quizzes && /\/courses\/[0-9]+\/quizzes\/[^\/]+/.test (location.pathname)) {
        let styleSheet = document.createElement('style')
        styleSheet.innerHTML =
            '#right-side{top: 56px; position: sticky;} \
             #question_list{max-height: 500px !important;} \
             .list_question.marked > .jump_to_question_link{color: red !important;} \
             .question.marked > .header{background: red; color: white;}';
        document.body.appendChild(styleSheet);
    }
})();