function decodeHTML(rawhtml) {
	var string = String(rawhtml);
	// uppercase
	string = String(string).replace(new RegExp('%40', "g"), '@');
	string = String(string).replace(new RegExp('%20', "g"), ' ');
	string = String(string).replace(new RegExp('%26', "g"), '&');
	string = String(string).replace(new RegExp('%2B', "g"), '+');
	string = String(string).replace(new RegExp('%2D', "g"), '-');
	string = String(string).replace(new RegExp('%2E', "g"), '.');
	string = String(string).replace(new RegExp('%21', "g"), '!');
	string = String(string).replace(new RegExp('%22', "g"), '"');
	string = String(string).replace(new RegExp('%23', "g"), '#');
	string = String(string).replace(new RegExp('%24', "g"), '$');
	string = String(string).replace(new RegExp('%25', "g"), '%');
	string = String(string).replace(new RegExp('%27', "g"), "'");
	string = String(string).replace(new RegExp('%28', "g"), '(');
	string = String(string).replace(new RegExp('%29', "g"), ')');
	string = String(string).replace(new RegExp('%2A', "g"), '*');
	string = String(string).replace(new RegExp('%2C', "g"), ',');
	string = String(string).replace(new RegExp('%91', "g"), '‘');
	string = String(string).replace(new RegExp('%92', "g"), '’');
	string = String(string).replace(new RegExp('%2F', "g"), '/');
	string = String(string).replace(new RegExp('%3A', "g"), ':');
	string = String(string).replace(new RegExp('%3B', "g"), ';');
	string = String(string).replace(new RegExp('%3C', "g"), '<');
	string = String(string).replace(new RegExp('%3E', "g"), '>');
	string = String(string).replace(new RegExp('%3D', "g"), '=');
	string = String(string).replace(new RegExp('%3F', "g"), '?');

	// lowercase
	string = String(string).replace(new RegExp('%40', "g"), '@');
	string = String(string).replace(new RegExp('%20', "g"), ' ');
	string = String(string).replace(new RegExp('%26', "g"), '&');
	string = String(string).replace(new RegExp('%2b', "g"), '+');
	string = String(string).replace(new RegExp('%2d', "g"), '-');
	string = String(string).replace(new RegExp('%2e', "g"), '.');
	string = String(string).replace(new RegExp('%21', "g"), '!');
	string = String(string).replace(new RegExp('%22', "g"), '"');
	string = String(string).replace(new RegExp('%23', "g"), '#');
	string = String(string).replace(new RegExp('%24', "g"), '$');
	string = String(string).replace(new RegExp('%25', "g"), '%');
	string = String(string).replace(new RegExp('%27', "g"), "'");
	string = String(string).replace(new RegExp('%28', "g"), '(');
	string = String(string).replace(new RegExp('%29', "g"), ')');
	string = String(string).replace(new RegExp('%2a', "g"), '*');
	string = String(string).replace(new RegExp('%2c', "g"), ',');
	string = String(string).replace(new RegExp('%91', "g"), '‘');
	string = String(string).replace(new RegExp('%92', "g"), '’');
	string = String(string).replace(new RegExp('%2f', "g"), '/');
	string = String(string).replace(new RegExp('%3a', "g"), ':');
	string = String(string).replace(new RegExp('%3b', "g"), ';');
	string = String(string).replace(new RegExp('%3c', "g"), '<');
	string = String(string).replace(new RegExp('%3e', "g"), '>');
	string = String(string).replace(new RegExp('%3d', "g"), '=');
	string = String(string).replace(new RegExp('%3f', "g"), '?');

	// Whole encoding table: https://www.w3schools.com/tags/ref_urlencode.asp

	return string;
}
if (typeof jbFullLibrary === "undefined") { console.log("[%cJBrix%c] decodeHTML(): Function Loaded %cSuccessfully!", "color:coral; font-size: 140%", "color:black", "color:green"); }