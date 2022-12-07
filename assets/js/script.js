const menuBtn = document.getElementById("menu_icon");
const userBtn = document.getElementById("user_btn");

const chevronLeft = document.getElementById("chevron-left");
const chevronRight = document.getElementById("chevron-right");
const slider = chevronLeft.closest(".slider");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    userBtn.classList.remove("active");
});

userBtn.addEventListener("click", () => {
    userBtn.classList.toggle("active");
    menuBtn.classList.remove("active");
});

chevronLeft.addEventListener("click", () => {});
