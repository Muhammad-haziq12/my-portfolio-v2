// start: Navbar
(function () {
    const navbar = document.querySelector("[data-navbar]");
    if (navbar) {
        document.querySelectorAll("[data-navbar-toggle]").forEach(function (toggle) {
            toggle.addEventListener("click", function (e) {
                e.preventDefault();
                navbar.classList.add("active");
            });
        });
        document.querySelectorAll("[data-navbar-dismiss]").forEach(function (toggle) {
            toggle.addEventListener("click", function (e) {
                e.preventDefault();
                navbar.classList.remove("active");
            });
        });
    }
})();
// end: Navbar

// start: Smooth scroll for navigation links
(function () {
    const navLinks = document.querySelectorAll(".navbar-menu-item-link");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href.startsWith("#") && href !== "#") {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                    document.querySelector("[data-navbar]").classList.remove("active");
                }
            }
        });
    });
})();
// end: Smooth scroll for navigation links
