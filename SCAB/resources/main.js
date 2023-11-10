document.getElementById('button-login').addEventListener('click', function () {
    window.location.href = 'index.html';
});


const scrollers = document.querySelectorAll(".scroller");




if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
}



function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true)
    });
}
