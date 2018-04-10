$(document).ready(function(){
    wikipediaViewerMain();
});

function wikipediaViewerMain(){
    var searchBox=$(".search-box");
    var randomUrl='https://en.wikipedia.org/wiki/Special:Random';
    var searchUrl='https://en.wikipedia.org/w/api.php?callback=?';
    var searchBoxValue='';

    function getSearchBoxValue(){
        if(searchBox.value.length!==0){
            searchBoxValue=searchBox.value;
            searchBoxValue=searchBoxValue.replace(/(\r\n|\n\r)/gm,'');
        }
    }

    function clearPreviousResults(){
        $('#response-area').chirldren('div').remove();
    }

    $('#random-button').click(function(){
        clearPreviousResults();
        searchBox.value='';
        window.open(randomUrl);
    })




}
