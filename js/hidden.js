const menu = document.querySelector(".mobile-menu"); 
const scrollDown = document.querySelector(".scroll-down"); 
const menuButton = document.querySelector(".burger-btn"); 
const closeButton = document.querySelector(".mobile-menu-close"); 
menuButton.addEventListener("click", () => {
    menu.classList.add("menu-active");
    scrollDown.style.display = "none"; 
});
closeButton.addEventListener("click", () => {
    menu.classList.remove("menu-active");
    scrollDown.style.display = "block"; 
});