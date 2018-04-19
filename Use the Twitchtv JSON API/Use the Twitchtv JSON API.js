$(document).ready(function () {
    getChannelInfo();
});

var channels = ["freecodecamp", "test_channel", "ESL_SC2"];
var client_Id = 'i4suuyjog3z5kawqo9ygt4d0p8a7ub';

function getChannelInfo() {
    channels.forEach(function (channel) {
        function makeURL(name) {
            return 'https://api.twitch.tv/kraken/streams/?client_id=' + client_Id + '&channel=' + name;
        };

        $.getJSON(makeURL(channel), function (data) {
            var twitchChannel='https://api.twitch.tv/kraken/channels/'+channel;

            var game,status;

            $.getJSON(twitchChannel).done(channel=>{
                if(channeldata.status===404){
                    game="Account Closed";
                    status="offline";
                }
            });

            
            if(data.stream===null){
                game="Offline";
                status="offline";
            }
            else {
                game = data.streams[0].channel.game;
                status = "online";
            }

            var data = data.streams[0].channel;
            var logo = data.logo !== null ? data.logo : "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
            var name = data.display_name !== null ? data.display_name : channel;
            var description = status === "online" ? ":" + data.status : "";

            var html = '<div class="row"><div class="col-xs-2 col-sm-1"><img src="' + logo + '" alt="" class="logo"></div><div class="col-xs-10 col-sm-3"><a href="' + data.url + '" target="_blank">' + name + '</a></div>            <div class="col-xs-10 col-sm-8">' +
                game + '<span>' + description + '</span></div></div>'

            status === "online" ? $(".display").prepend(html) : $(".display").append(html);

        });

    });
}