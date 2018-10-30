let elms = document.querySelectorAll('[oninstantchange]');
for (var i = 0; i < elms.length; i++) {
    elms[i].addEventListener("keydown", function(el) {
        setTimeout(function () {
            eval(elms[i].getAttribute("oninstantchange"));
        }, 1);
    });
}
