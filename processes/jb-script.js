if (typeof jbDebugMode == undefined) { var jbDebugMode = false } /* If no Debug mode is entered */

let jbScriptInitialized = false;
jbScriptInit();

function jbScriptInit() {
    if (jbScriptInitialized) return; // Init once (This is hackable)

    let scriptElements = document.querySelectorAll("jbrix");

    if (scriptElements.length > 0) {
        for(let i = 0; i < scriptElements.length; i++) {
            let scriptElement = scriptElements[i];
            let lines = scriptElement.innerHTML.split("\n"); // Read all lines
            scriptElement.innerHTML = ""; //  Clear all lines
            scriptElement.style.display = "block"; // Prepare to how output

            if (lines.length > 0) {
                for (let j = 0; j < lines.length; j++) {
                    if (lines[j] == "" || lines[j].startsWith("//")) continue;

                    let commands = lines[j].split(";");
                    for(let k = 0; k < commands.length; k++) { // All commands on a line
                        let command = commands[k].trim();

                        if (command == "") continue;

                        // Process the command
                        if (!jbExecuteCommand(command, scriptElement)) {
        					console.log("Unknown command: '" + command + "'");
        				}
                    }
                }
            }
        }
    }
    jbScriptInitialized = true;
}

function jbExecuteCommand(command, outputElement) {
    // Include
    var reg_include = /include\(["']([^"']+)["']\)/g;
	var mat_include = command.match(reg_include);
    if (mat_include) {
        let file = mat_include[0].split('(')[1].split(')')[0].replace(/\'/g,"").replace(/\"/g,'');
        let currentDir = window.location.href.split('/').slice(0, -1).join('/');

        // Send a file request
        fetch(file)
        .then(response => {
            if (!response.ok && jbDebugMode) {
                console.log("[%cJBrix%c] " + response.status + ": Failed to fetch source from: %c'" + file + "'", "color:coral; font-size: 140%", "color:black", "color:blue; font-size: 110%; font-weight: bold;");
            }
            return response.text(); // Convert response to text
        })
        .then(response => {
            console.log(response);
            outputElement.innerHTML += this.responseText; // Append response to output element as html
        });

    	return true;
    }


    // Print
    var reg_print = /print\(["']([^"']+)["']\)/g;
	var mat_print = command.match(reg_print);
	if (mat_print) {
		var string = mat_print[0].split('(')[1].split(')')[0].replace(/\'/g,"").replace(/\"/g,'');

		outputElement.innerHTML += string;
		return true;
	}

	// Unknown command
	return false;
}
