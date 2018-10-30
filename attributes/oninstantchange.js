function init_oninstantchange() {
    let elms = document.querySelectorAll('[oninstantchange]');
    for (var i = 0; i < elms.length; i++) {
        elms[i].addEventListener("keydown", function(elm) {
            setTimeout(() => {
                console.log(elm, elm.getAttribute("oninstantchange"));
                eval(elm.getAttribute("oninstantchange"));
            }, 1);
        });
    }
}



window.onload = init_oninstantchange();
