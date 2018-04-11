$(document).ready(function(){
    wikipediaViewerMain();
});

function wikipediaViewerMain(){
    var search=$(".search");
    var randomUrl='https://en.wikipedia.org/wiki/Special:Random';
    var searchUrl='https://en.wikipedia.org/w/api.php';
    var searchValue='';

    function getSearchBoxValue(){
        if(search.value.length!==0){
            searchValue=search.value;
            searchValue=searchValue.replace(/(\r\n|\n\r)/gm,'');
        }
    }

    $('#random-button').click(function(){
        window.open(randomUrl);
    });

    $('search-button').click(function(){
        if(search.value.length!==0){
            searchValue=search.value;
            searchValue=searchValue.replace(/(\r\n|\n\r)/gm,'');
        }
        else{
            search.value='';
            exit;
        }

        $.ajax({
            
        });
    });



}
