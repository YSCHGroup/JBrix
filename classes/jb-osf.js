var imgs = document.getElementsByClassName('jb-osf');
var class_counter = 0
for (var i = 0; i < imgs.length; i++) {
	var src_url = imgs[i].getAttribute("src");
	var wrap = document.createElement("a");
	wrap.href = src_url;
	wrap.setAttribute('target', '_blank');

	child_img = document.createElement("img");

	Array.from(imgs[i].attributes).forEach(attr => {
		// Transfer all attributes to the new img
		child_img.setAttribute(attr.name, attr.value)
	})
	console.log(child_img);


	imgs[i].parentNode.replaceChild(wrap, imgs[i]); 
	wrap.appendChild(child_img);

	class_counter++;
}
console.log("[%cJBrix%c] %d 'jb-osf' Class(es) Loaded %cSuccessfully!", "color:coral; font-size: 140%", "color:black", class_counter, "color:green");