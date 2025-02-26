let slidesTech = document.querySelectorAll(
  ".technologie .img-container.imgTech"
);
let dotsTech = document.querySelectorAll(".technologie .dot");
let slidesApp = document.querySelectorAll(".application .img-container.imgApp");
let dotsApp = document.querySelectorAll(".application .dot.app");
let slidesLogi = document.querySelectorAll(".logiciel .img-container.imgLogi");
let dotsLogi = document.querySelectorAll(".logiciel .dot.logi");
let slideIndex = 1;

showSlides(slideIndex, slidesTech, dotsTech);
showSlides(slideIndex, slidesApp, dotsApp);
showSlides(slideIndex, slidesLogi, dotsLogi);

function currentSlideTech(n) {
  showSlides((slideIndex = n), slidesTech, dotsTech);
  // const container = slidesTech[n - 1].querySelector(".hover-image");
}
function currentSlideApp(n) {
  showSlides((slideIndex = n), slidesApp, dotsApp);
}
function currentSlideLogi(n) {
  showSlides((slideIndex = n), slidesLogi, dotsLogi);
}

function showSlides(n, slidesSection, dotsSection) {
  let i;

  slides(slidesSection, n);
  dots(dotsSection);
}

function hide(hideSection, hideDot) {
  hideSlides(hideSection);
  hideDots(hideDot);
}

function dots(dotsType) {
  for (i = 0; i < dotsType.length; i++) {
    dotsType[i].style.display = "inline-block";
    dotsType[i].className = dotsType[i].className.replace(" active", "");
    dotsType[i].style.backgroundColor = "#bbb";
  }
  dotsType[slideIndex - 1].className += " active";
  dotsType[slideIndex - 1].style.backgroundColor = "#fc6136";
}

function slides(slidesType, n) {
  if (n > slidesType.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slidesType.length;
  }
  for (i = 0; i < slidesType.length; i++) {
    slidesType[i].style.display = "none";
  }
  slidesType[slideIndex - 1].style.display = "block";

  const container1 = slidesType[n - 1];
}

function hideSlides(hideSlidesType) {
  for (i = 0; i < hideSlidesType.length; i++) {
    hideSlidesType[i].style.display = "block";
  }
}

function hideDots(hideDotsType) {
  for (i = 0; i < hideDotsType.length; i++) {
    hideDotsType[i].style.display = "none";
  }
}
