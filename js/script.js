
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.querySelector("[data-menu]"); // Получаем мобильное меню
    const menuLinks = document.querySelectorAll(".mobile-menu-navigation-link"); // Ссылки внутри меню
    const closeButton = document.querySelector("[data-menu-close]"); // Кнопка закрытия
    const burgerButton = document.querySelector("[data-menu-open]"); // Кнопка открытия

    function closeMenu() {
        if (mobileMenu) {
            mobileMenu.classList.remove("active"); // Убираем класс, но не скрываем через display
        }
    }

    function openMenu() {
        if (mobileMenu) {
            mobileMenu.classList.add("active"); // Добавляем класс при открытии
        }
    }

    // Закрытие меню при клике на ссылку
    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            if (link.getAttribute("href").startsWith("#")) { 
                event.preventDefault(); // Предотвращаем мгновенный переход (чтобы анимация сработала)
                const section = document.querySelector(link.getAttribute("href")); // Находим секцию
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" }); // Плавно прокручиваем
                }
                setTimeout(closeMenu, 500); // Закрываем меню с задержкой после перехода
            }
        });
    });

    // Открытие меню при клике на бургер
    if (burgerButton) {
        burgerButton.addEventListener("click", openMenu);
    }

    // Закрытие при нажатии на кнопку "Закрыть"
    if (closeButton) {
        closeButton.addEventListener("click", closeMenu);
    }
});