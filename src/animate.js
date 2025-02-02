const animate = () => {

function fadeRotateOut(element) {
    element.classList.add("fade-rotate-out");

    element.addEventListener("animationend", () => {
        element.classList.remove("fade-rotate-out")
    });
}

const plusElements = document.querySelectorAll('.plus');

plusElements.forEach(plus => {
    plus.addEventListener("click", () => {
        fadeRotateOut(plus);
    })
});
}

export default animate;