
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
    let pageRedirect = "index.html#section-list-car"

    window.location.href = pageRedirect;
}

function GoToReservationCarPage() {
    let pageRedirect = "details.html"

    window.location.href = pageRedirect;
}

function GoToLoginPage() {
    let pageRedirect = "login.html";

    window.location.href = pageRedirect;
}

const track = document.getElementById("image-track")

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}
window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}



window.onmousemove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const containerRect = track.parentElement.getBoundingClientRect();
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX + containerRect.left;
    const maxDelta = containerRect.width / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    const animationDuration = 2500;

    track.style.transition = `transform ${animationDuration}ms ease-out`;
    track.style.transform = `translateX(${nextPercentage}%)`;

    for (const image of track.getElementsByClassName("image")) {
        image.style.transition = `object-position ${animationDuration}ms ease-out`;
        image.style.objectPosition = `${100 + nextPercentage}% center`;
    }
}


(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()



