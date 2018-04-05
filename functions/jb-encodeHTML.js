function decodeHTML(rawhtml) {
	var string = String(rawhtml);
	// uppercase
	string = String(string).replace(new RegExp('@', "g"), '%40');
	string = String(string).replace(new RegExp(' ', "g"), '%20');
	string = String(string).replace(new RegExp('&', "g"), '%26');
	string = String(string).replace(new RegExp('+', "g"), '%2B');
	string = String(string).replace(new RegExp('-', "g"), '%2D');
	string = String(string).replace(new RegExp('.', "g"), '%2E');
	string = String(string).replace(new RegExp('!', "g"), '%21');
	string = String(string).replace(new RegExp('"', "g"), '%22');
	string = String(string).replace(new RegExp('#', "g"), '%23');
	string = String(string).replace(new RegExp('$', "g"), '%24');
	string = String(string).replace(new RegExp('%', "g"), '%25');
	string = String(string).replace(new RegExp("'", "g"), "%27");
	string = String(string).replace(new RegExp('(', "g"), '%28');
	string = String(string).replace(new RegExp(')', "g"), '%29');
	string = String(string).replace(new RegExp('*', "g"), '%2A');
	string = String(string).replace(new RegExp(',', "g"), '%2C');
	string = String(string).replace(new RegExp('‘', "g"), '%91');
	string = String(string).replace(new RegExp('’', "g"), '%92');
	string = String(string).replace(new RegExp('/', "g"), '%2F');
	string = String(string).replace(new RegExp(':', "g"), '%3A');
	string = String(string).replace(new RegExp(';', "g"), '%3B');
	string = String(string).replace(new RegExp('<', "g"), '%3C');
	string = String(string).replace(new RegExp('=', "g"), '%3D');
	string = String(string).replace(new RegExp('>', "g"), '%3E');
	string = String(string).replace(new RegExp('?', "g"), '%3F');

	// lowercase
	string = String(string).replace(new RegExp('+', "g"), '%2b');
	string = String(string).replace(new RegExp('-', "g"), '%2d');
	string = String(string).replace(new RegExp('.', "g"), '%2e');
	string = String(string).replace(new RegExp('*', "g"), '%2a');
	string = String(string).replace(new RegExp(',', "g"), '%2c');
	string = String(string).replace(new RegExp('/', "g"), '%2f');
	string = String(string).replace(new RegExp(':', "g"), '%3a');
	string = String(string).replace(new RegExp(';', "g"), '%3b');
	string = String(string).replace(new RegExp('<', "g"), '%3c');
	string = String(string).replace(new RegExp('=', "g"), '%3d');
	string = String(string).replace(new RegExp('>', "g"), '%3e');
	string = String(string).replace(new RegExp('?', "g"), '%3f');

	// Whole encoding table: https://www.w3schools.com/tags/ref_urlencode.asp

	return string;
}
console.log("[%cJBrix%c] decodeHTML(): Function Loaded %cSuccessfully!", "color:coral; font-size: 140%", "color:black", "color:green");