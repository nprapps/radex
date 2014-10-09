$(document).ready(function() {

    var sound = new Howl({
      urls: ['assets/bayaka.mp3'],
      autoplay: true,
      loop: true,
      volume: 0.7,
    });
    
    
    var BV = new $.BigVideo();
    BV.init();
    BV.show('assets/fire.mp4',{ambient:true,doLoop:true});
    
    
    
    $('#ex1-play').on('click', function(){
		sound.stop().play();
	});
	$('#ex1-pause').on('click', function(){
		sound.pause();
	});
    
    
});
