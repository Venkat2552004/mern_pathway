let slideIdx = 1;
showSlides(slideIdx);

function plusSlides(n) {
  showSlides(slideIdx += n);
}

function currentSlide(n) {
  showSlides(slideIdx = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide-imgs");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIdx = 1}
  if (n < 1) {slideIdx = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIdx-1].style.display = "block";
  dots[slideIdx-1].className += " active";
}