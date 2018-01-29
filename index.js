
var audio = new Audio();
i = 0;

// Button Function
var playbtn = document.getElementById('play');
var pausebtn = document.getElementById('pause');
var skipbtn = document.getElementById('next');


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
// display the songtitle after skipping track
	document.getElementById('trackTitle').innerHTML = "track " + (playlist[i]);
})

// display sound track
document.getElementById('trackTitle').innerHTML = "track " + (playlist[i]);




// OO
// var audio = new Audio();
// i = 0;

// function Jukebox(){
// 	var playbtn = document.getElementById('play');
// 	var pausebtn = document.getElementById('pause');
// 	var skipbtn = document.getElementById('next');

// 	this.playList = ["audio/song2.mp3","audio/song3.mp3", "audio/song4.mp3"]
// 	this.playBtn = playbtn.addEventListener('click', function(){
// 		this.audio.play();
// 	})

// 	this.pauseBtn = pausebtn.addEventListener('click', function(){
// 		this.audio.pause();
// 	})

// 	this.skipBtn = skipbtn.addEventListener('click', function(){
// 		if ( i === this.playList.length-1){
// 			i = 0
// 			this.audio.src = this.playList[i];
// 			this.audio.play()
// 		} else {
// 			i++
// 			this.audio.src = this.playList[i];
// 			this.audio.play()
// 		}
// 	})
// }

