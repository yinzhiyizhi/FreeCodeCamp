$(document).ready(function(){

});

var channels=[];
var client_Id='';

function getChannelInfo(){
    channels.forEach(function(channel){
        function makeURL(type,name){
            return 'https://api.twitch.tv/kraken/'+type+'/?client_id='+client_Id+'&'+name;
        };

        $.get

    });
}
