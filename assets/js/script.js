const menuBtn = document.getElementById("menu_icon");
const userBtn = document.getElementById("user_btn-responsive");
const menuLinks = document.getElementById("menu_links");
const menuLogin = document.getElementById("menu_login");
const main = document.querySelector("main");
const slider = document.querySelectorAll(".slider");

function main_active(element) {
    if (element.classList.contains("active")) {
        main.classList.add("active");
    } else {
        main.classList.remove("active");
    }
}

menuBtn.addEventListener("click", () => {
    menuLinks.classList.toggle("active");
    menuLogin.classList.remove("active");
    main_active(menuLinks);
});

userBtn.addEventListener("click", () => {
    menuLogin.classList.toggle("active");
    menuLinks.classList.remove("active");
    main_active(menuLogin);
});

slider.forEach((elt) => {
    elt.addEventListener("scroll", () => {
        const chevronLeft = elt.parentNode.querySelector(".chevron-left");
        const chevronRight = elt.parentNode.querySelector(".chevron-right");

        if (elt.scrollLeft + elt.offsetWidth == elt.scrollWidth) {
            chevronRight.classList.remove("active");
            chevronLeft.classList.add("active");
        } else if (elt.scrollLeft == 0) {
            chevronRight.classList.add("active");
            chevronLeft.classList.remove("active");
        } else {
            chevronLeft.classList.add("active");
            chevronRight.classList.add("active");
        }
    });
});

function slideBtn(btn, direction) {
    btn.forEach((elt) => {
        elt.addEventListener("click", () => {
            const slider = elt.parentNode.parentNode.querySelector(".slider");
            if (direction == 1) {
                slider.scrollLeft += 314;
            } else {
                slider.scrollLeft -= 314;
            }
        });
    });
}

const allChevronLeft = document.querySelectorAll(".chevron-left");
const allChevronRight = document.querySelectorAll(".chevron-right");
window.addEventListener("load", slideBtn(allChevronLeft, 0));
window.addEventListener("load", slideBtn(allChevronRight, 1));

function countElement(element) {
    i = 0;
    for (const child of element.children) {
        i++;
    }
    return i;
}

function gridTemplate(element, w) {
    element.forEach((elt) => {
        elt.style["grid-template-columns"] =
            "repeat(" + countElement(elt) + ", " + w + ")";
    });
}

gridTemplate(slider, "147px");
gridTemplate(document.querySelectorAll(".streaming"), "19.63rem");

function navbar() {
    if (window.innerWidth > 992) {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.querySelector("header").style.top = "0";
            } else {
                document.querySelector("header").style.top = "-4.375rem";
            }
            prevScrollpos = currentScrollPos;
        };
    } else {
        window.onscroll = function () {
            document.querySelector("header").style.top = "0";
        };
    }
}

window.addEventListener("load", navbar);
window.addEventListener("resize", navbar);

function arrowShow(slider) {
    for (i = 0; i < slider.length; i++) {
        const sliderContainer = slider[i].parentNode;
        const arrow = sliderContainer.querySelector(".slider-indicator");
        if (slider[i].scrollWidth <= slider[i].offsetWidth) {
            arrow.style.display = "none";
        } else {
            arrow.style.display = "block";
        }
    }
}

window.addEventListener("load", arrowShow(slider));
document.getElementsByTagName("BODY")[0].onresize = function () {
    arrowShow(slider);
};
