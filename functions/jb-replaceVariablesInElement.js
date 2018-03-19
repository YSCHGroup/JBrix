function replaceVariablesInElement(element) {
	console.log("Replaceing all global variable keys in " + element);

	var matches = 0;
	for (var i = 0; i < Object.keys(window).length; i++) {
		var key = Object.keys(window)[i];
		var value = Object.values(window)[i];
		if (element.innerHTML.indexOf("%" + key + "%") > -1) {		// Check if the exacy global variable key name exists
			// The key exists in the context
			element.innerHTML = element.innerHTML.replace(new RegExp("%" + key + "%", "g"), value);
			console.log("Found " + key + " in context and replaced it with " + value);
			matches++;
		}
		else if (element.innerHTML.indexOf("%" + key.toLowerCase() + "%") > -1) {		// Check if the lowercase version of the global variable key name exists
			// The key exists in the context
			element.innerHTML = element.innerHTML.replace(new RegExp("%" + key.toLowerCase() + "%", "g"), value);
			console.log("Found " + key + " in context and replaced it with " + value);
			matches++;
		}
		else if (element.innerHTML.indexOf("%" + key.toUpperCase() + "%") > -1) {		// Check if the uppercase version of the global variable key name exists
			// The key exists in the context
			element.innerHTML = element.innerHTML.replace(new RegExp("%" + key.toUpperCase() + "%", "g"), value);
			console.log("Found " + key + " in context and replaced it with " + value);
			matches++;
		}
	}
	console.log("[replaceVariablesInElement] Replaced %c(" + matches + ")%c variables in document", "color: green; font-size: 110%", "color: black;");
}
replaceVariablesInElement(document.head);
replaceVariablesInElement(document.body);
console.log("[%cJBrix%c] 'replaceVariablesInElement()' Function Loaded %cSuccessfully!", "color:coral; font-size: 140%", "color:black", "color:green");