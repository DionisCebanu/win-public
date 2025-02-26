const wc1 = document.querySelector(".wc1");
const wc2 = document.querySelector(".wc2");
const wc3 = document.querySelector(".wc3");
const wc4 = document.querySelector(".wc4");
const wc5 = document.querySelector(".wc5");
const wc6 = document.querySelector(".wc6");
const wc7 = document.querySelector(".wc7");
const wc8 = document.querySelector(".wc8");
const wc9 = document.querySelector(".wc9");
const wc10 = document.querySelector(".wc10");
const wc11 = document.querySelector(".wc11");
const wc12 = document.querySelector(".wc12");
const wc13 = document.querySelector(".wc13");
const wc14 = document.querySelector(".wc14");
const en1 = document.querySelector(".langue #en");

document.querySelector(".langue").addEventListener("click", function (event) {
  event.preventDefault();

  if (en1.textContent == "En") {
    wc1.innerHTML = "Louer des chalets à des endroits formidables.";
    wc2.innerHTML =
      "We Chalet offre une application unique en proposant des hébergements à la fois 100% québécois et à des tarifs plus abordables que les alternatives.";
    wc3.innerHTML =
      "La production phénoménale <br />de <span>Tim Hortons</span>";
    wc4.innerHTML =
      "Lorem ipsum dolor sit amet consectetur. Sed ut phasellus ac in eu orci id vitae diam. Ac sit sed amet placewct pellentesque suspendissesollicitudin. Id ac id proin dui elit morbi id malesuada viverwc. Cursus lacinia leo consectetur eget turpis sodales dolor volutpat lacus.";
    wc5.innerHTML =
      "Un processus de paiement <br /><span>simple et efficace</span>";
    wc6.innerHTML =
      "Lorem ipsum dolor sit amet consectetur. Sed ut phasellus ac in eu orci id vitae diam. Ac sit sed amet placewct pellentesque suspendisse sollicitudin. Id ac id proin dui elit morbi id malesuada viverwc. Cursus lacinia leo consectetur eget turpis sodales dolor volutpat lacus.";
    wc7.innerHTML = "Projet Précédent";
    wc8.innerHTML = "Projet suivant";
  } else if (en1.textContent == "Fr") {
    wc1.innerHTML = "Rent cabins in amazing locations.";
    wc2.innerHTML =
      "We Chalet offers a unique application by providing accommodations<br/>  that are both 100% Quebecois and at more affordable rates than<br/>  alternatives.";
    wc3.innerHTML =
      "The phenomenal production <br />of <span>Tim Hortons</span>";
    wc4.innerHTML =
      "1Lorem ipsum dolor sit amet consectetur. Sed ut phasellus ac in eu orci id vitae diam. Ac sit sed amet placewct pellentesque suspendissesollicitudin. Id ac id proin dui elit morbi id malesuada viverwc. Cursus lacinia leo consectetur eget turpis sodales dolor volutpat lacus.";
    wc5.innerHTML = "A payment process <span>simple and<br /> efficient</span>";
    wc6.innerHTML =
      "1Lorem ipsum dolor sit amet consectetur. Sed ut phasellus ac in eu orci id vitae diam. Ac sit sed amet placewct pellentesque suspendisse sollicitudin. Id ac id proin dui elit morbi id malesuada viverwc. Cursus lacinia leo consectetur eget turpis sodales dolor volutpat lacus.";
    wc7.innerHTML = "Previous Project";
    wc8.innerHTML = "Next Project";
  }
});
