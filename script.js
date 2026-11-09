AOS.init();

const text = [
    "BSIS Student",
    "Web Developer",
    "Tech Enthusiast"
];

let i = 0;

function typeEffect() {
    document.getElementById("typing").innerHTML =
    text[i];

    i++;

    if(i >= text.length){
        i = 0;
    }
}

setInterval(typeEffect,2000);

typeEffect();