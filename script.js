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
