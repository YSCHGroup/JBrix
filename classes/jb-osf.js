var imgs = document.getElementsByClassName('jb-osf');

for (var i = 0; i < imgs.length; i++) {
	var src_url = imgs[i].getAttribute("src");
	var wrap = document.createElement("a");
	wrap.href = src_url;

	child_img = document.createElement("img");
	child_img.src = src_url;
	child_img.style.width = String(imgs[i].getAttribute("width"));
	child_img.style.height = imgs[i].getAttribute("height");
	child_img.style.marginTop = imgs[i].getAttribute("vspace");
	child_img.style.marginLeft = imgs[i].getAttribute("hspace");
	child_img.longDesc = imgs[i].getAttribute("longdesc");
	child_img.alt = imgs[i].getAttribute("alt");
	child_img.align = imgs[i].getAttribute("align");
	child_img.title = imgs[i].getAttribute("title");
	child_img.id = imgs[i].getAttribute("id");
	child_img.class = imgs[i].getAttribute("class");



	imgs[i].parentNode.replaceChild(wrap, imgs[0]); 
	wrap.appendChild(child_img);
}