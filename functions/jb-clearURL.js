function clearURLArgs() {
	if (window.location.href.indexOf('?') > -1) {
		console.log("URL contains arguments");
		var url = String(window.location.href).split("?")[0];
		console.log(url);
	}
	else {
		console.log("URL does not contains arguments");
	}
}
function clearURLSubPages() {
	if (window.location.href.indexOf('/') > -1) {
		console.log("URL contains subpages");
		var url = String(window.location.href).split("/")[2];
		console.log(url);
	}
	else
	{
		console.log("URL does not contain any subpages");
	}
}
