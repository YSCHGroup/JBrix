if (typeof jbDebugMode == undefined) { var jbDebugMode = false } /* If no Debug mode is entered */

function arrayFindKeyIndex(arr, key) {
	return arr.findIndex(function(element) { return element[0] === key })
}
function arrayFindValueIndex(arr, val) {
	return arr.findIndex(function(element) { return element[1] === val })
}
if (typeof jbFullLibrary === "undefined") { console.log("[%cJBrix%c] arrayManagement.js: Function Loaded %cSuccessfully!", "color:coral; font-size: 140%", "color:black", "color:green"); }