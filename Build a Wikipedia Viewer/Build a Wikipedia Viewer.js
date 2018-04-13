$(document).ready(function () {
    wikipediaViewerMain();
});

function wikipediaViewerMain() {
    var search = $('#search');
    var result = $('#result');
    var randomUrl = 'https://en.wikipedia.org/wiki/Special:Random';
    var searchUrl = 'https://en.wikipedia.org/w/api.php';
    var searchValue = '';

    $('#random-button').click(function () {
        window.open(randomUrl);
    });

    $('#search-button').click(function () {
        if (search.val() !== '') {
            searchValue = search.val();
            searchValue = searchValue.replace(/(\r\n|\n\r)/gm, '');
        } else {
            result.html('');
            exit;
        }

        $.ajax({
            url: searchUrl,
            data: {
                action: 'query',
                list: 'search',
                srsearch: searchValue,
                format: 'json'
            },
            dataType: 'jsonp',
            success: function (x) {
                var html = '<!-- result -->';
                html += '<div class="row row-centered">';

                x.query.search.map(function (w) {
                    html += '  <div class="col-xs-10 col-centered">';
                    html += '    <a href="https://en.wikipedia.org/wiki/' + w.title + '" target="_blank">';
                    html += '        <div class="panel panel-default">';
                    html += '            <div class="panel-heading">';
                    html += '                <h3 class="panel-title">' + w.title + '</h3>';
                    html += '            </div>';
                    html += '            <div class="panel-body">';
                    html += '                ' + w.snippet;
                    html += '            </div>';
                    html += '        </div>';
                    html += '    </a>';
                    html += '  </div>';
                });
                html += '</div>';
                result.html(html);
            }
        });
    });
}