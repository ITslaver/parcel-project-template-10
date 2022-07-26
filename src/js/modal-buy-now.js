(() => {
 const refs = {
   openModalBtn: document.querySelector(".modal-open"),
   opensModalBtn: document.querySelector(".modal-opens"),
   closeModalBtn: document.querySelector(".modal-close"),
   modal: document.querySelector(".data-modal"),
 };
 
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.opensModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
 
  function toggleModal() {
   document.body.classList.toggle("modal-open");
   refs.modal.classList.toggle("is-hidden");
 }
})();