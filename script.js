
var audio = new Audio();
i = 0;

// Accessing button functionality
var playbtn = document.getElementById('play');
var pausebtn = document.getElementById('pause');
var skipbtn = document.getElementById('next');
var playlist = ["audio/song2.mp3","audio/song3.mp3", "audio/song4.mp3"];

// Setting the playlist to the audio source
audio.src = playlist[i];

// display song title
document.getElementById('trackTitle').innerHTML = "track " + (playlist[i]);

// Object
var Jukebox ={

	playlist: ["audio/song2.mp3","audio/song3.mp3", "audio/song4.mp3"],
// the play method
	play: function(){
		playbtn.addEventListener('click', function(){
		audio.play();
		})
	},

	pause: function(){
			pausebtn.addEventListener('click', function(){
			audio.pause();
		})
	},

	next: function(){
	skipbtn.addEventListener('click', function(){
		if ( i === Jukebox.playlist.length-1){
		i = 0
		audio.src = Jukebox.playlist[i];
		audio.play()
		} else {
		i++
		audio.src = Jukebox.playlist[i];
		audio.play()
	},
};