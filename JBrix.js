

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
	    		console.log(i,"Found Custom Root Path For JBrix: '" + path_val + "'")
	    		root_directory = path_val;
	    	}
	    	else {
	    		console.log(i,"Current Directory as root directory for JBrix...")
	    	}
	    }
	}

	document.getElementsByTagName("head")[0].appendChild(document.createComment(' JBrix Imported Modules: START'));

	AddLibrary(root_directory + "/classes/jb-oim");
	AddLibrary(root_directory + "/classes/jb-osf");

	document.getElementsByTagName("head")[0].appendChild(document.createComment(' JBrix Imported Modules: END'));
}

function AddLibrary(file) {
	var NewScript=document.createElement('script');
	NewScript.src=file+".js";
   	NewScript.type='text/javascript';
	var head = document.getElementsByTagName("head")[0];
   	head.appendChild(NewScript);
}