const menuIcon = document.querySelector(".mobile-nav-icon");
const menuItems = document.querySelector(".mobile-menu-items");

menuIcon.addEventListener("click", () => {
    menuItems.classList.toggle("active");
});