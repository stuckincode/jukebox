$(document).ready(function () {
    var jukebox = $('ul.player');

    jukebox.on('click', 'li', function () {

        var currentPlay = $(this);
        var songName = $(this).attr('data-src');
        $('body').append("<audio id='player' src=" + songName + "></audio>");

        var audioPlayer = $('#player').get(0);


        if (songName === $(audioPlayer).attr('src')) {

            if (audioPlayer.paused) {
                audioPlayer.play();
                $(currentPlay).attr('id', 'playing');

                audioPlayer.onended = function () {
                    $('audio#player').remove();
                      currentPlay.removeAttr('id');
                }; // on ended
            } else {
                audioPlayer.pause();
                $('audio#player').remove(); // new
                $('body').append(audioPlayer); //new
                currentPlay.attr('id', 'paused');
            }; //if else loop
        } else {

            var newCurrentPlay = $(this);
            var newSong = $(this).attr('data-src');
            
            $('.player li').removeAttr('id');
            audioPlayer.pause();

            $(audioPlayer).attr('src', newSong);
            var newAudioPlayer = $('#player')[0];

            if (newAudioPlayer.paused) {
                $('audio#player').remove(); // new
                $('body').append(audioPlayer); //new
                newAudioPlayer.play();
                $(newCurrentPlay).attr('id', 'playing');

                newAudioPlayer.onended = function () {
                    $('audio#player').remove();
                    newCurrentPlay.removeAttr('id', 'playing');
                }; // on ended
            } else {
                $('audio#player').remove(); // new
                $('body').append(audioPlayer); //new
                newAudioPlayer.pause();
                newCurrentPlay.attr('id', 'paused');
            }; //if else paused
        }; //if-else src attr

    }); //onclick jukebox
}); //document ready