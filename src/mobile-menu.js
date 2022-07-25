(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelector("[data-menu-close]"),
    modal: document.querySelector("[data-menu]"),
    bodyNoScroll: document.querySelector("[data-nonScroll]"),
    containerGoWide: document.querySelector("[data-go-wide]"),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
    refs.bodyNoScroll.classList.toggle('no-scroll');

    refs.modal.classList.toggle("is-open");
    refs.bodyNoScroll.classList.toggle("no-scroll");
    refs.containerGoWide.classList.toggle("go-wide");

  }
})();

// -------------------------------button read more-------------------------------------------------------

function readMore() {
  let more = document.querySelector('.more');
  if (more.style.display === 'none') {
    more.style.display = 'block';
  } else {
    more.style.display = 'block';
    more.style.display = 'none';
  }
}
function readMoreThird() {
  let moreThird = document.querySelector('.more-third');
  if (moreThird.style.display === 'none') {
    moreThird.style.display = 'block';
  } else {
    moreThird.style.display = 'block';
    moreThird.style.display = 'none';
  }
}
function readMoreSecond() {
  let moreSecond = document.querySelector('.more-second');
  if (moreSecond.style.display === 'none') {
    moreSecond.style.display = 'block';
  } else {
    moreSecond.style.display = 'block';
    moreSecond.style.display = 'none';
  }
}
