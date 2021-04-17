var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume*100+"%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= 0.95;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate *= 1.05;
	console.log(video.playbackRate);
});

document.querySelector("#slider").addEventListener("click", function() {
	var slider = this.value
	console.log("Volume");
	console.log(this.value);
	video.volume = slider/100;
	document.querySelector("#volume").innerHTML=video.volume*100+"%"
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if(video.currentTime + 15 >= video.duration){
		console.log("Start over");
		video.currentTime = 0;
		video.play();
	}
	else{
		console.log("Skip ahead");
		video.currentTime += 15;
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.volume == 0.0){
		console.log("Unmute");
		video.volume=1;
		document.querySelector("#mute").innerHTML="Mute";
		video.muted = false;
	}else{
		console.log("Mute");
		video.volume=0;
		document.querySelector("#mute").innerHTML="Unmute";
		video.muted = true;
	}
	document.querySelector("#volume").innerHTML=video.volume*100+"%"
	console.log(video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("vintage");
	video.classList.add("oldSchool");
});
document.querySelector("#orig").addEventListener("click", function() {
	console.log("original");
	video.classList.remove("oldSchool");
});