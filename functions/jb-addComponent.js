if (typeof jbDebugMode == undefined) { var jbDebugMode = false } /* If no Debug mode is entered */

function addComponent(file) {
	var NewScript=document.createElement('script');
	NewScript.src=file+".js";
   	NewScript.type='text/javascript';
   	jbModuleList.appendChild(NewScript);
}

if (typeof jbFullLibrary === "undefined") { console.log("[%cJBrix%c] addComponent: Function Loaded %cSuccessfully!", "color:coral; font-size: 140%", "color:black", "color:green"); }