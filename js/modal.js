// (() => {
//     const refs = {
//       // Додати атрибут data-modal-open на кнопку відкриття
//       openModalBtn: document.querySelector("[data-modal-open]"),
//       // Додати атрибут data-modal-close на кнопку закриття
//       closeModalBtn: document.querySelector("[data-modal-close]"),
//       // Додати атрибут data-modal на бекдроп модалки
//       modal: document.querySelector("[data-modal]"),
//     };
  
//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);
  
//     function toggleModal() {
//       // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
//       refs.modal.classList.toggle("is-open");
//     }
//   })();
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  if (!refs.modal) return; // Защита от ошибок

  function toggleModal() {
    refs.modal.classList.toggle("is-open");

    // Проверяем, если меню открыто — закрываем его
    const menu = document.querySelector("[data-menu]");
    if (menu && menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
    }
  }

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
})();