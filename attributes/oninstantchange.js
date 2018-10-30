let elms = document.querySelectorAll('[oninstantchange]');
for (var i = 0; i < elms.length; i++) {
    elms[i].addEventListener("onkeydown", function(el) {
        console.log(el);
    });
}
