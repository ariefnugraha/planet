const toggle = document.querySelector('.toggle-button');
const toggleIcon = document.querySelector("#toggle-icon");
const body = document.querySelector("#body");

console.log(body)
toggle.addEventListener("click", () => {
    if(body.classList.contains( 'lightmode')) {
        body.classList.remove("lightmode");
        body.classList.add("darkmode");
        toggle.style.left = "60px";
        toggle.style.backgroundColor = "#121212";
        toggleIcon.classList.remove("fa-sun");
        toggleIcon.classList.add("fa-moon");
    } else if(body.classList.contains("darkmode")) {
        body.classList.remove("darkmode");
        body.classList.add("lightmode");
        toggle.style.left = "10px";
        toggle.style.backgroundColor = "#ffffff";
        toggleIcon.classList.add("fa-sun");
        toggleIcon.classList.remove("fa-moon");
    }

})