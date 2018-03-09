

window.onLoad = Init();


function Init() {
	document.getElementsByTagName("head")[0].appendChild(document.createComment(' JBrix Imported Modules: START'));

	AddLibrary("classes/jb-oim");
	AddLibrary("classes/jb-osf");

	document.getElementsByTagName("head")[0].appendChild(document.createComment(' JBrix Imported Modules: END'));
}

function AddLibrary(file) {
	var NewScript=document.createElement('script');
	NewScript.src=file+".js";
   	NewScript.type='text/javascript';
	var head = document.getElementsByTagName("head")[0];
   	head.appendChild(NewScript);
}