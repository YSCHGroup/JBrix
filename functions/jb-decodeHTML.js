function decodeHTML(rawhtml) {
	var string = String(rawhtml);
	string.replace('%3A', ':');
	string.replace('%40', '@');

	// Whole encoding table: https://www.w3schools.com/tags/ref_urlencode.asp

	return string;
}
console.log("[%cJBrix%c] 'decodeHTML()' Function Loaded %cSuccessfully!", "color:coral; font-size: 140%", "color:black", "color:green");