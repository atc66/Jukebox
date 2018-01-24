console.log('test')


var box = document.getElementById('box')
var start = document.getElementById('play')
var pause = document.getElementById('pause')
var ff = document.getElementById('ff')
var rew = document.getElementById('rew')
var skipf = document.getElementById('skipf')
var skipb = document.getElementById('skipb')
var song = document.getElementById('song')
var pause = document.getElementById('pause')

start.addEventListener('click', function(){
	;
})

var getaudio = $('#player')[0];


function Playlist(){
	this.songs = []
	this.addSongs = function(x){
		this.songs.push(x)
		console.log('A new song was added')
	}

	this.listSongs = function(x){
		for (var i = 0; i < this.songs.length; i++){
			console.log(this.songs[i].name + ' is on your playlist')
		}
	}
}

class Song {
	constructor (title, artist, location){
		this.title = title;
		this.artist = artist;
		this.location = location;
	}
}

var brethren = new Song ('Brethren Arise', 'Chris Zabriskie', 'audio.Brethren_Arise.mp3')
var outlet = new Song ('Outlet', 'Silent Partner', 'audio.Outlet.mp3')



