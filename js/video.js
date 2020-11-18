var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol= document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log(this);
	console.log(this.value / 100);
	video.volume = (this.value / 100);
	let vol= document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if ((video.currentTime + 5) >= video.duration) {
		video.currentTime = 0;
		console.log("Current location " + video.currentTime);
		video.play();
	}
	else {
		video.currentTime += 5;
		console.log("Current location " + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (!video.muted) {
		video.muted = true;
		document.querySelector('#mute').innerHTML = "Unmute";
	}
	else {
		video.muted = false;
		document.querySelector('#mute').innerHTML = "Mute";
	}
});

document.querySelector("#old").addEventListener("click", function() {
	/* document.getElementById("myVideo").setAttribute("class", "oldTime"); */
	video.classList.add("oldTime"); 
});

document.querySelector("#original").addEventListener("click", function() {
	/* document.getElementById("myVideo").setAttribute("class", "none"); */
	video.classList.remove("oldTime"); 
});