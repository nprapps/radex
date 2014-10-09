$(document).ready(function() {

    var sound = new Howl({
      urls: ['assets/bayaka.mp3'],
      autoplay: false,
      loop: true,
      volume: 0.7,
    });

    
    $('#ex1-play').on('click', function(){
		sound.stop().play();
	});
	$('#ex1-pause').on('click', function(){
		sound.pause();
	});
	
	//mute all videos
	$("video").prop('muted', true);
    
    
});
