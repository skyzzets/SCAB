// Initi boostrap plugin -  tool tip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Initi plugin - animate.css
const elementParagraph = document.querySelector('.container .header-title');

elementParagraph.addEventListener('click', () => {
    elementParagraph.classList.add('animate__animated', 'animate__rubberBand');

    setTimeout(() => {
        elementParagraph.classList.remove('animate__animated', 'animate__rubberBand');

    }, 2000);
});

// Initi menu - side bar
function GetCurrentUrl() {
    return window.location.pathname.split("/").pop();
}

function GoToPageSearchCar() {
    let pageRedirect = "index.html";

    window.location.href = pageRedirect;
}

function GoToPageListCar(){
    let pageRedirect = "index.html#section-list-car"

    window.location.href = pageRedirect;
}

function GoToPageReservationCar(){
    let pageRedirect ="details.html"

    window.location.href = pageRedirect;
}
