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

        if (jbUseJQuery) {
            $.ajax({
                type: "GET",
                url: file,
                crossDomain: true,
                success: function (data) {
                    // do something with server response data
        				outputElement.innerHTML += data;
                },
                error: function (err) {
                    // handle your error logic here
        				console.log("Include Error:", err);
                }
            });
        }
        else {

            // https://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/
            // https://stackoverflow.com/questions/3151436/how-can-i-get-the-current-directory-name-in-javascript
            // https://blog.garstasio.com/you-dont-need-jquery/ajax/

            // Send a xhr request
            let xhr = new XMLHttpRequest();
            xhr.open('GET', file);
            xhr.setRequestHeader("Origin", currentDir);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    alert('Response is: ' + xhr.responseText);
                }
                else {
                    alert('Request failed. Response is: ' + xhr.status);
                }
            };
            try {
                xhr.send();
            }
            catch(err) {
                console.log(err.message);
            }
        }
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
