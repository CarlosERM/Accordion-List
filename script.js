function accordion() {
  const boxTerm = document.querySelectorAll(".box__term");
  const activeClass = "ativo";

  if (boxTerm.length) {
    function collapsing() {
      boxTerm.forEach((term) => {
        if (this != term) {
          term.classList.remove(activeClass);
          term.nextElementSibling.classList.remove(activeClass);
        }
      });

      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    boxTerm.forEach((term) => {
      term.addEventListener("click", collapsing);
    });
  }
}

accordion();
