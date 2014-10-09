$(document).ready(function() {

    var mySound = new buzz.sound("/assets/bayaka", {
    formats: [ "mp3"],
    preload: true,
    autoplay: true,
    loop: true
    });
    


	$('.audio-controls').on('click', function(){
		mySound.togglePlay();
		$(this).toggleClass( "audio-paused" );
	});
    
    
});
