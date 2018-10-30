function init_oninstantchange() {
    let elms = document.querySelectorAll('[oninstantchange]');
    for (var i = 0; i < elms.length; i++) {
        elms[i].addEventListener("keydown", function() {
            setTimeout(() => {
                eval(this.getAttribute("oninstantchange"));
            }, 1);
        });
    }
}



window.onload = init_oninstantchange();
