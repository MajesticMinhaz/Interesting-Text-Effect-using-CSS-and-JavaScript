
/*
Channel Name : Easy Coding
Watch My YouTube Video : https://youtu.be/1u0az-HeP68
*/

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

const spansSlow = document.querySelectorAll('.spanSlow');
const spansFast = document.querySelectorAll('.spanFast');

let width = window.innerWidth;

function handleMouseMove(e) {
    let normalizedPosition = e.pageX / (width / 2) - 1;
    let speedSlow = 100 * normalizedPosition;
    let speedFast = 200 * normalizedPosition;
    spansSlow.forEach(function (span) {
        span.style.transform = `translate(${speedSlow}px)`;
    });
    spansFast.forEach(function (span) {
        span.style.transform = `translate(${speedFast}px)`;
    })
}

function handleWindowResize() {
    width = window.innerWidth;
}
