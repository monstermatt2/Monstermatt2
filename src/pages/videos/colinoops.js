import React, { Component } from 'react';
import Vsidebar from '../../vsidebar/vsidebar';

class Colinoops extends Component {
  render() {
    return (
        <div className="wrapper">
            <Vsidebar />
            <div id='media-player'>
		<video id='media-video' controls>
			<source src='parrots.mp4' type='video/mp4'>
			<source src='parrots.webm' type='video/webm'>
		</video>
		<div id='media-controls'>
			<progress id='progress-bar' min='0' max='100' value='0'>0% played</progress>
			<button id='replay-button' class='replay' title='replay' onclick='replayMedia();'>Replay</button>	
			<button id='play-pause-button' class='play' title='play' onclick='togglePlayPause();'>Play</button>
			<button id='stop-button' class='stop' title='stop' onclick='stopPlayer();'>Stop</button>
			<button id='volume-inc-button' class='volume-plus' title='increase volume' onclick='changeVolume("+");'>Increase volume</button>
			<button id='volume-dec-button' class='volume-minus' title='decrease volume' onclick='changeVolume("-");'>Decrease volume</button>
			<button id='mute-button' class='mute' title='mute' onclick='toggleMute("true");'>Mute</button>	
		</div>
	</div>	
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", function() { initialiseMediaPlayer(); }, false);

var mediaPlayer;
var playPauseBtn;
var muteBtn;
var progressBar;

function initialiseMediaPlayer() {
	mediaPlayer = document.getElementById('media-video');
	
	playPauseBtn = document.getElementById('play-pause-button');
	muteBtn = document.getElementById('mute-button');
	progressBar = document.getElementById('progress-bar');

	mediaPlayer.controls = false;
	
	mediaPlayer.addEventListener('timeupdate', updateProgressBar, false);
	
	mediaPlayer.addEventListener('play', function() {
		changeButtonType(playPauseBtn, 'pause');
	}, false);
	mediaPlayer.addEventListener('pause', function() {
		changeButtonType(playPauseBtn, 'play');
	}, false);
	
	mediaPlayer.addEventListener('volumechange', function(e) { 
		if (mediaPlayer.muted) changeButtonType(muteBtn, 'unmute');
		else changeButtonType(muteBtn, 'mute');
	}, false);	
	mediaPlayer.addEventListener('ended', function() { this.pause(); }, false);	
}

function togglePlayPause() {
	if (mediaPlayer.paused || mediaPlayer.ended) {
		changeButtonType(playPauseBtn, 'pause');
		mediaPlayer.play();
	}
	else {
		changeButtonType(playPauseBtn, 'play');
		mediaPlayer.pause();
	}
}

function stopPlayer() {
	mediaPlayer.pause();
	mediaPlayer.currentTime = 0;
}

function changeVolume(direction) {
	if (direction === '+') mediaPlayer.volume += mediaPlayer.volume == 1 ? 0 : 0.1;
	else mediaPlayer.volume -= (mediaPlayer.volume == 0 ? 0 : 0.1);
	mediaPlayer.volume = parseFloat(mediaPlayer.volume).toFixed(1);
}

function toggleMute() {
	if (mediaPlayer.muted) {
		changeButtonType(muteBtn, 'mute');
		mediaPlayer.muted = false;
	}
	else {
		changeButtonType(muteBtn, 'unmute');
		mediaPlayer.muted = true;
	}
}

function replayMedia() {
	resetPlayer();
	mediaPlayer.play();
}

function updateProgressBar() {
	var percentage = Math.floor((100 / mediaPlayer.duration) * mediaPlayer.currentTime);
	progressBar.value = percentage;
	progressBar.innerHTML = percentage + '% played';
}

function changeButtonType(btn, value) {
	btn.title = value;
	btn.innerHTML = value;
	btn.className = value;
}

function loadVideo() {
	for (var i = 0; i < arguments.length; i++) {
		var file = arguments[i].split('.');
		var ext = file[file.length - 1];
		if (canPlayVideo(ext)) {
			resetPlayer();
			mediaPlayer.src = arguments[i];
			mediaPlayer.load();
			break;
		}
	}
}

function canPlayVideo(ext) {
	var ableToPlay = mediaPlayer.canPlayType('video/' + ext);
	if (ableToPlay == '') return false;
	else return true;
}

function resetPlayer() {
	progressBar.value = 0;
	mediaPlayer.currentTime = 0;
	changeButtonType(playPauseBtn, 'play');
}

export default Colinoops;