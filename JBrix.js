
// Load JBrix when page has loaded
window.onLoad = Init();

// Variabls
var root_directory = "";

// Functions
function Init() {
	// Get the current directory
	var script_tags = document.getElementsByTagName("script");
	for (var i=0;i<script_tags.length;i++) {
	    if (script_tags[i].src.includes('JBrix.js')) {
	    	var path_val = script_tags[i].getAttribute("path")
	    	if (path_val) {
	    		console.log("[%cJBrix%c] %cFound Custom Root Path For JBrix: %c'" + path_val + "'", "color:coral; font-size: 140%", "color:black", "color:green", "color:blue");
	    		root_directory = path_val;
	    	}
	    	else {
	    		console.log(i,"Current Directory as root directory for JBrix...")
	    	}
	    }
	}

	// Add all components
	document.getElementsByTagName("head")[0].appendChild(document.createComment(' JBrix Imported Modules: START'));

	// Classes
	AddLibrary(root_directory + "/classes/jb-oim");
	AddLibrary(root_directory + "/classes/jb-osf");
	// Functions
	AddLibrary(root_directory + "/functions/jb-decodeHTML");
	AddLibrary(root_directory + "/functions/jb-getUrlVariables");
	AddLibrary(root_directory + "/functions/jb-replaceVariablesInElement");

	document.getElementsByTagName("head")[0].appendChild(document.createComment(' JBrix Imported Modules: END'));
}

function AddLibrary(file) {
	var NewScript=document.createElement('script');
	NewScript.src=file+".js";
   	NewScript.type='text/javascript';
	var head = document.getElementsByTagName("head")[0];
   	head.appendChild(NewScript);
}