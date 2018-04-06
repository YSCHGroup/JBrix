function getUrlVariables() {
	try {
		var args = String(window.location.href).split('?')[1].split('&');
		for (var i = 0; i < args.length; i++) {
			var name = args[i].split("=")[0];
			var value = args[i].split("=")[1];

			value = decodeURI(value);

			window[name] = value;
			if (jbDebugMode) { console.log("[%cJBrix%c] getUrlVariables: %c" + name + "%c=%c" + value, "color:coral; font-size: 140%", "color: black", "font-weight: bold; color: blue; font-size: 105%", "color: black; padding: 0 1.5px", "font-weight: bold; color: blue; font-size: 110%"); }
		}
	}
	catch(error) {
		if (jbDebugMode) { console.log("[%cJBrix%c] getUrlVariables: %cNo variables in url found...", "color:coral; font-size: 140%", "color:black", "color: red;"); }
	}
}
getUrlVariables();
if (typeof jbFullLibrary === "undefined") { console.log("[%cJBrix%c] getURLVariables: Function Loaded %cSuccessfully!", "color:coral; font-size: 140%", "color:black", "color:green"); }