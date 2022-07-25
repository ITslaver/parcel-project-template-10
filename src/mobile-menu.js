(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelector("[data-menu-close]"),
    modal: document.querySelector("[data-menu]"),
    bodyNoScroll: document.querySelector("[data-nonScroll]"),
    containerGoWide: document.querySelector("[data-go-wide]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
    refs.bodyNoScroll.classList.toggle("no-scroll");
    refs.containerGoWide.classList.toggle("go-wide");
  }
})();