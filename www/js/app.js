$(document).ready(function() {

    $('body').css('opacity', 1);
    $('.titlecard').css('opacity', 0);
    

    var mySound = new buzz.sound("http://stage-apps.npr.org/radex/assets/bayaka-binaural.mp3", {
    preload: true,
    autoplay: true,
    loop: true
    });
    


	$('.audio-controls').on('click', function(){
		mySound.togglePlay();
		$(this).toggleClass( "audio-paused" );
	});

    
    
});
