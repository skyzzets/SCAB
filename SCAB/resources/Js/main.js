
// Init - boostrap tool tip plugin
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Init - navigation menu plugin
function GetCurrentUrl() {
    return window.location.pathname.split("/").pop();
}

function GetParameterByQueryString() {
    let url = window.location.href;

    let params = new URLSearchParams(url.split('?')[1]);

    return params.get(`name`) || null;
}

function GoToHomePage() {
    let pageRedirect = "index.html";

    window.location.href = pageRedirect;
}

function GoToSearchCarPage(name) {
    let pageRedirect = "details.html";

    if (name) {
        pageRedirect = `details.html?name=${name}`
    }

    window.location.href = pageRedirect;
}

function GoToListCarPage() {
    let pageRedirect = "listcar.html"

    window.location.href = pageRedirect;
}

function GoToReservationCarPage() {
    let pageRedirect = "reserva.html"

    window.location.href = pageRedirect;
}

function GoToLoginPage() {
    let pageRedirect = "login.html";

    window.location.href = pageRedirect;
}



document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 35,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});




