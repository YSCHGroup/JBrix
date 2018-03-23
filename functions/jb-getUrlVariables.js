function getUrlVariables() {
	try {
		var args = String(window.location.href).split('?')[1].split('&');
		for (var i = 0; i < args.length; i++) {
			var name = args[i].split("=")[0];
			var value = args[i].split("=")[1];

			value = decodeHTML(value); // Using jb-decodeHTML.js

			window[name] = value;
			console.log("[getUrlVariables] " + name + "=" + value);
		}
	}
	catch(error) {
		console.log("[getUrlVariables]%c No variables in url found... \n(" + error + ")", "color: red;");
	}
}
getUrlVariables();
console.log("[%cJBrix%c] 'getURLVariables()' Function Loaded %cSuccessfully!", "color:coral; font-size: 140%", "color:black", "color:green");