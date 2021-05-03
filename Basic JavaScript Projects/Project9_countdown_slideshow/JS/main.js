function countdown() { //this timer will countdown the seconds till it hits -1 in which an alert will appear
    var seconds = document.getElementById("seconds").value ;

    function tick() {
        seconds = seconds - 1;
        timer.innerHtml = seconds;
        setTimeout(tick, 1000);
    if (seconds == -1) {
        alert ("Time's Up!"); //will popup and appear on the screen
    }
    }
    tick();
}
// JavaScript code to create a slideshow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides (n) {
    showSlides (slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) { //how the slideshow will operate
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < dots.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classname = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}