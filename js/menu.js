(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelector("[data-menu-close]"),
    modal: document.querySelector("[data-menu]"),
  };

  if (!refs.modal) return; // Если меню не найдено, не выполняем код

  function toggleModal() {
    const isMenuOpen = refs.modal.classList.contains("is-open");
    
    if (isMenuOpen) {
      refs.modal.classList.remove("is-open");
    } else {
      refs.modal.classList.add("is-open");
    }
  }

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
})();