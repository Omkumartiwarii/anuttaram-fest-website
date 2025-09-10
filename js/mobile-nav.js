(function () {
    const hamb = document.getElementById("hambtn");
    const mobile = document.getElementById("mobileNav");
    const overlay = document.getElementById("navOverlay");
    const links = mobile.querySelectorAll("a[data-stagger]");

    function openMenu() {
        mobile.classList.add("open");
        overlay.classList.add("show");
        hamb.classList.add("active");
        hamb.setAttribute("aria-expanded", "true");
        mobile.setAttribute("aria-hidden", "false");
        overlay.setAttribute("aria-hidden", "false");

        links.forEach((a, i) => {
            a.style.transitionDelay = `${i * 60}ms`;
            a.setAttribute("data-shown", "1");
        });
    }

    function closeMenu() {
        mobile.classList.remove("open");
        overlay.classList.remove("show");
        hamb.classList.remove("active");
        hamb.setAttribute("aria-expanded", "false");
        mobile.setAttribute("aria-hidden", "true");
        overlay.setAttribute("aria-hidden", "true");

        links.forEach((a) => {
            a.style.transitionDelay = '';
            a.removeAttribute("data-shown");
        });
    }

    hamb.addEventListener("click", (e) => {
        e.stopPropagation();
        if (mobile.classList.contains("open")) closeMenu(); else openMenu();
    });

    links.forEach(a => a.addEventListener("click", () => closeMenu()));
    overlay.addEventListener("click", closeMenu);

    document.addEventListener("click", (e) => {
        if (mobile.classList.contains("open") && !mobile.contains(e.target) && !hamb.contains(e.target)) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") closeMenu();
    });
})();