function getUrlVariables() {
	try {
		var args = String(window.location.href).split('?')[1].split('&');
		for (var i = 0; i < args.length; i++) {
			var name = args[i].split("=")[0];
			var value = args[i].split("=")[1];

			value = convert_from_html_to_string(value);

			window[name] = value;
			console.log("[getUrlVariables] " + name + "=" + value);
		}
	}
	catch(error) {
		console.log("[getUrlVariables]%c No variables in url found...", "color: red;");
	}
}
getUrlVariables();
console.log("[%cJBrix%c] 'getURLVariables()' Function Loaded %cSuccessfully!", "color:coral; font-size: 140%", "color:black", "color:green");