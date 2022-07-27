function cancelScroll() {
  if (window.matchMedia("(max-width: 1199px)").matches) {
    document.querySelector('.header__nav').classList.toggle("is-open");
    document.body.classList.toggle("no-scroll");
  }
}