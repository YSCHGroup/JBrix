function Init() {
	// Get the current directory
	var script_tags = document.getElementsByTagName("script");
	for (var i=0;i<script_tags.length;i++) {
	    if (script_tags[i].src.includes('JBrix.js')) {
	    	var path_val = script_tags[i].getAttribute("path")
	    	jbDebugMode = (String(script_tags[i].getAttribute("debug")) == "true");
	    	if (jbDebugMode) { console.log("[%cJBrix%c] Debug Mode: %cOn", "color:coral; font-size: 140%", "color:black", "color: green; font-weight: bold;") }

	    	if (path_val) {
	    		if (jbDebugMode) { console.log("[%cJBrix%c] Found Custom Root Path For JBrix: %c'" + path_val + "'", "color:coral; font-size: 140%", "color:black", "color:blue; font-size: 110%; font-weight: bold;");}
	    		root_directory = path_val;
	    	}
	    	else {
	    		console.log(i,"Current Directory as root directory for JBrix...")
	    	}
	    }
	}

	// Add all components
	jbModuleList.appendChild(document.createComment(' JBrix Imported Modules: START'));

	// Processes
	AddLibrary(root_directory + "/processes/jb-init");
	AddLibrary(root_directory + "/processes/jb-draw");

	// Settings
	AddLibrary(root_directory + "/settings/jb-config");

	// Classes
	AddLibrary(root_directory + "/classes/jb-oim");
	AddLibrary(root_directory + "/classes/jb-osf");
	AddLibrary(root_directory + "/classes/jb-moveableIn()");
	// Functions
	AddLibrary(root_directory + "/functions/jb-fetchDocument");
	AddLibrary(root_directory + "/functions/jb-clearURL");
	AddLibrary(root_directory + "/functions/jb-getUrlVariables");
	AddLibrary(root_directory + "/functions/jb-replaceVariablesInElement");
	AddLibrary(root_directory + "/functions/jb-arrayManagement");

	jbModuleList.appendChild(document.createComment(' JBrix Imported Modules: END'));

	console.log("[%cJBrix%c] %cSuccessfully loaded all components of JBrix!", "color:coral; font-size: 140%", "color:black", "color:green");
}