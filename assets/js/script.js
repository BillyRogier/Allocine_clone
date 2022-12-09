const menuBtn = document.getElementById("menu_icon");
const userBtn = document.getElementById("user_btn");
const allSlider = document.querySelectorAll(".slider");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    userBtn.classList.remove("active");
});

userBtn.addEventListener("click", () => {
    userBtn.classList.toggle("active");
    menuBtn.classList.remove("active");
});

function slide_scroll(chevron, id) {
    const chevronLeft =
        document.getElementsByClassName("chevron-left")[chevron];
    const chevronRight =
        document.getElementsByClassName("chevron-right")[chevron];
    const slider = document.getElementById(id);

    if (slider.scrollLeft + slider.offsetWidth == slider.scrollWidth) {
        chevronRight.classList.remove("active");
        chevronLeft.classList.add("active");
    } else if (slider.scrollLeft == 0) {
        chevronRight.classList.add("active");
        chevronLeft.classList.remove("active");
    } else {
        chevronLeft.classList.add("active");
        chevronRight.classList.add("active");
    }
}

function slide_right(chevron, id) {
    const slider = document.getElementById(id);
    slider.scrollLeft += 314;
    slide_scroll(chevron, id);
}

function slide_left(chevron, id) {
    const slider = document.getElementById(id);
    slider.scrollLeft -= 314;
    slide_scroll(chevron, id);
}
