function clearURLArgs() {
	if (window.location.href.indexOf('?') > -1) {
		var url = String(window.location.href).split("?")[0];
		history.pushState(null, '', url);
	}
	else {
		console.log("[%cJBrix%c] %cURL does not contains arguments", "color:coral; font-size: 140%", "color: red");
	}
}
function clearURLSubPages() {
	if (window.location.href.indexOf('/') > -1) {
		if (String(window.location.href).split("/")[0] == "file:") {
			console.log("[%cJBrix%c] %cCannon clear subpages from website without domain...", "color:coral; font-size: 140%", "color: red");
		}
		else
		{
			var url = String(window.location.href).split("/")[0];
			history.pushState("", '', url);
		}
	}
	else
	{
		console.log("[%cJBrix%c] %cURL does not contain any subpages", "color:coral; font-size: 140%", "color: red");
	}
}
console.log("[%cJBrix%c] clearURL: Function Loaded %cSuccessfully!", "color:coral; font-size: 140%", "color:black", "color:green")