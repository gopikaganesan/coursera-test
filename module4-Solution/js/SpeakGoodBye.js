(function (window) {
	var goodByeSpeaker = {};
	var speakWord = "Good Bye";
	goodByeSpeaker.sayGoodBye = function (name) {
		console.log(speakWord + " " + name);
	}
	window.goodByeSpeaker = goodByeSpeaker;
})(window);