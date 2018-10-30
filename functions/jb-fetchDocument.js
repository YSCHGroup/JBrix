if (typeof jbDebugMode == undefined) { var jbDebugMode = false } /* If no Debug mode is entered */

function fetchDocument() {
	documentRaw = document;
}

fetchDocument();
if (typeof jbFullLibrary === "undefined") { console.log("[%cJBrix%c] fetchDocument: Function Loaded %cSuccessfully!", "color:coral; font-size: 140%", "color:black", "color:green"); }