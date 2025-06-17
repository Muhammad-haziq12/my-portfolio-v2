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
