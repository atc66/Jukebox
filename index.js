
var audio = new Audio();
i = 0;

// // Button Function
var playbtn = document.getElementById('play');
var pausebtn = document.getElementById('pause');
var skipbtn = document.getElementById('skipf');

// Setting Playlist
var playlist = ["audio/song2.mp3","audio/song3.mp3", "audio/song4.mp3"];
audio.src = playlist[i];

// Press play music begin
playbtn.addEventListener('click', function(){
	audio.play();
})

// Press pause music pauses
pausebtn.addEventListener('click', function(){
	audio.pause();
})

// Skipping Tracks
skipbtn.addEventListener('click', function(){
	if ( i === playlist.length-1){
		i = 0
		audio.src = playlist[i];
		audio.play()
	} else {
		i++
		audio.src = playlist[i];
		audio.play()
	}
})

