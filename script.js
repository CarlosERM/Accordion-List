function accordion() {
  const boxTerm = document.querySelectorAll(".box__term");
  const activeClass = "ativo";

  if (boxTerm.length) {
    function collapsing() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    boxTerm.forEach((term) => {
      term.addEventListener("click", collapsing);
    });
  }
}

accordion();

// Can i do this?

const body = document.querySelector("body");
const imageWoman = document.querySelector(".box__woman");
const imageBack = document.querySelector(".box__back");
const box__image = document.querySelector(".box__image");

function mudaImagem(event) {
  if (event.currentTarget.innerWidth >= 768) {
    imageWoman.src = "images\\illustration-woman-online-desktop.svg";
    imageBack.src = "images\\bg-pattern-desktop.svg";
  } else {
    imageWoman.src = "images\\illustration-woman-online-mobile.svg";
    imageBack.src = "images\\bg-pattern-mobile.svg";
  }
}
window.addEventListener("resize", mudaImagem);
