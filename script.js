"use strict";

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");

const navLinks =
    document.querySelectorAll(".nav-menu a");

function toggleMenu() {
    const isOpen =
        menuToggle.classList.toggle("active");

    navMenu.classList.toggle(
        "active",
        isOpen
    );

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );
}

function closeMenu() {
    menuToggle.classList.remove("active");

    navMenu.classList.remove("active");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
    );
}

menuToggle.addEventListener(
    "click",
    toggleMenu
);

navLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        closeMenu
    );

});

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            navMenu.classList.contains("active")
        ) {
            closeMenu();
        }

    }
);

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 700) {
            closeMenu();
        }

    }
);