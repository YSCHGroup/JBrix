/*
   _________      _                 __   _____  __
  |_  | ___ \    (_)               /  | |  _  |/  |
    | | |_/ /_ __ ___  __  ______  `| | | |/' |`| |
    | | ___ \ '__| \ \/ / |______|  | | |  /| | | |
/\__/ / |_/ / |  | |>  <           _| |_\ |_/ /_| |_
\____/\____/|_|  |_/_/\_\          \___(_)___(_)___/
 Thanks for using the JBrix JavaScript Library!  <3
*/

function addComponent(file) {
	var NewScript=document.createElement('script');
	NewScript.src=file+".js";
   	NewScript.type='text/javascript';
   	jbModuleList.appendChild(NewScript);
}

// Initialize Varialbes
var jbFullLibrary = true;
var jbDebugMode = false;

// Variabls
var root_directory = "";

// Create new elements
var jbModuleList = document.createElement("ul");
jbModuleList.id="JBrixComponents";
document.getElementsByTagName("head")[0].appendChild(jbModuleList);

// Load JBrix when page has loaded
window.onLoad = Init();

// Functions
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

	// Classes
	addComponent(root_directory + "/classes/jb-oim");
	addComponent(root_directory + "/classes/jb-osf");
	addComponent(root_directory + "/classes/jb-moveableIn()");
	// Functions
	addComponent(root_directory + "/functions/jb-fetchDocument");
	addComponent(root_directory + "/functions/jb-clearURL");
	addComponent(root_directory + "/functions/jb-getUrlVariables");
	addComponent(root_directory + "/functions/jb-replaceVariablesInElement");
	addComponent(root_directory + "/functions/jb-arrayManagement");
	// Attributes
	addComponent(root_directory + "/attributes/oninstantchange");

	jbModuleList.appendChild(document.createComment(' JBrix Imported Modules: END'));

	console.log("[%cJBrix%c] %cSuccessfully loaded all components of JBrix!", "color:coral; font-size: 140%", "color:black", "color:green");
}
