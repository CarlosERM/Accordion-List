function accordion() {
  const boxTerm = document.querySelectorAll(".box__term");
  const boxTermBig = document.querySelectorAll(".box__term--big");
  const activeClass = "ativo";
  const specialClass = "box__description--big";

  if (boxTerm.length) {
    function collapsing() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    function collapsingBig() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(specialClass);
    }

    boxTerm.forEach((term) => {
      term.addEventListener("click", collapsing);
    });

    boxTermBig.forEach((termBig) => {
      termBig.addEventListener("click", collapsingBig);
    });
  }
}

accordion();
