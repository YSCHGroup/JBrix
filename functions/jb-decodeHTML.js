function decodeHTML(rawhtml) {
	var rawstring = String(rawhtml);
	rawstring = String(rawstring).replace(new RegExp('%40', "g"), '@');
	rawstring = String(rawstring).replace(new RegExp('%20', "g"), ' ');
	rawstring = String(rawstring).replace(new RegExp('%26', "g"), '&');
	rawstring = String(rawstring).replace(new RegExp('%2B', "g"), '+');
	rawstring = String(rawstring).replace(new RegExp('%2D', "g"), '-');
	rawstring = String(rawstring).replace(new RegExp('%2E', "g"), '.');
	rawstring = String(rawstring).replace(new RegExp('%21', "g"), '!');
	rawstring = String(rawstring).replace(new RegExp('%22', "g"), '"');
	rawstring = String(rawstring).replace(new RegExp('%23', "g"), '#');
	rawstring = String(rawstring).replace(new RegExp('%24', "g"), '$');
	rawstring = String(rawstring).replace(new RegExp('%25', "g"), '%');
	rawstring = String(rawstring).replace(new RegExp('%27', "g"), "'");
	rawstring = String(rawstring).replace(new RegExp('%28', "g"), '(');
	rawstring = String(rawstring).replace(new RegExp('%29', "g"), ')');
	rawstring = String(rawstring).replace(new RegExp('%2A', "g"), '*');
	rawstring = String(rawstring).replace(new RegExp('%2C', "g"), ',');
	rawstring = String(rawstring).replace(new RegExp('%91', "g"), '‘');
	rawstring = String(rawstring).replace(new RegExp('%92', "g"), '’');
	rawstring = String(rawstring).replace(new RegExp('%2F', "g"), '/');
	rawstring = String(rawstring).replace(new RegExp('%3A', "g"), ':');
	rawstring = String(rawstring).replace(new RegExp('%3B', "g"), ';');
	rawstring = String(rawstring).replace(new RegExp('%3C', "g"), '<');
	rawstring = String(rawstring).replace(new RegExp('%3E', "g"), '>');
	rawstring = String(rawstring).replace(new RegExp('%3D', "g"), '=');
	rawstring = String(rawstring).replace(new RegExp('%3F', "g"), '?');

	// Whole encoding table: https://www.w3schools.com/tags/ref_urlencode.asp

	return rawstring;
}
console.log("[%cJBrix%c] 'decodeHTML()' Function Loaded %cSuccessfully!", "color:coral; font-size: 140%", "color:black", "color:green");