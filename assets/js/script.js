const menuBtn = document.getElementById("menu_icon");
const userBtn = document.getElementById("user_btn");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    userBtn.classList.remove("active");
});

userBtn.addEventListener("click", () => {
    userBtn.classList.toggle("active");
    menuBtn.classList.remove("active");
});

function slide_right(chevron, id) {
    const chevronLeft =
        document.getElementsByClassName("chevron-left")[chevron];
    const chevronRight =
        document.getElementsByClassName("chevron-right")[chevron];
    const slider = document.getElementById(id);
    slider.scrollLeft += 314;
    chevronLeft.classList.add("active");
    setTimeout(function () {
        if (slider.scrollLeft + slider.offsetWidth == slider.scrollWidth) {
            chevronRight.classList.remove("active");
        }
    }, 300);
}

function slide_left(chevron, id) {
    const chevronLeft =
        document.getElementsByClassName("chevron-left")[chevron];
    const chevronRight =
        document.getElementsByClassName("chevron-right")[chevron];
    const slider = document.getElementById(id);
    slider.scrollLeft -= 314;
    chevronRight.classList.add("active");
    setTimeout(function () {
        if (slider.scrollLeft == 0) {
            chevronLeft.classList.remove("active");
        }
    }, 300);
}
