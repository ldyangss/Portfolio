window.onload = function() {
    setTimeout(function() {
        document.querySelector('.lightbeam').style.animationPlayState = "running";
    }, 2000);

    setTimeout(function() {
        document.querySelector('.screen').style.opacity = "1";
    }, 5000);
}
