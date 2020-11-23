(function () {
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
		for(var i = 0; i < names.length; i++){
		var startletter = names[i].charAt(0).toLowerCase();
		if(startletter === 'j') {
			goodByeSpeaker.sayGoodBye(names[i]);
		}
		else {
			helloSpeaker.sayHello(names[i]);
		}
	}
})();