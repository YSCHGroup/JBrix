function replaceVariablesInElement(element) {
	var matches = 0;
	for (var i = 0; i < Object.keys(window).length; i++) {
		try {
			var key = Object.keys(window)[i];
			var value = Object.values(window)[i];
			if (String(typeof value) === "function" || String(typeof value) === "object" || value === null) {
				continue;
			}

			if (element.innerHTML.indexOf("%" + key + "%") > -1) {		// Check if the exacy global variable key name exists
				// The key exists in the context
				element.innerHTML = element.innerHTML.replace(new RegExp("%" + key + "%", "g"), value);
				matches++;
			}
			else if (element.innerHTML.indexOf("%" + key.toLowerCase() + "%") > -1) {		// Check if the lowercase version of the global variable key name exists
				// The key exists in the context
				element.innerHTML = element.innerHTML.replace(new RegExp("%" + key.toLowerCase() + "%", "g"), value);
				matches++;
			}
			else if (element.innerHTML.indexOf("%" + key.toUpperCase() + "%") > -1) {		// Check if the uppercase version of the global variable key name exists
				// The key exists in the context
				element.innerHTML = element.innerHTML.replace(new RegExp("%" + key.toUpperCase() + "%", "g"), value);
				matches++;
			}
		}
		catch(error) {
			console.log(key + ": " + value)
			console.log(error)
		}
	}
	if (jbDebugMode) { console.log("[%cJBrix%c] replaceVariablesInElement: Replaced %c(" + matches + ")%c variables in " + String(element.tagName), "color:coral; font-size: 140%", "color:black", "color: green; font-size: 110%", "color: black;"); }
}
replaceVariablesInElement(document.head); // Automatically replace all variables on the page
replaceVariablesInElement(document.body);
if (typeof jbFullLibrary === "undefined") { console.log("[%cJBrix%c] replaceVariablesInElement: Function Loaded %cSuccessfully!", "color:coral; font-size: 140%", "color:black", "color:green"); }