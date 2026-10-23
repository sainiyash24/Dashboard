
/* Find the hamburger button and sidebar */
const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");

/* Open or close the sidebar when clicked */
menuButton.addEventListener("click", function () {
    sidebar.classList.toggle("show");
});

/* Find all sidebar dropdown buttons */
const navButtons = document.querySelectorAll(".nav-toggle");

/* Open all sidebar dropdowns when page loads */
navButtons.forEach(function (button) {
    button.parentElement.classList.add("open");
});

/* Add click behaviour to each dropdown */
navButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const navGroup = button.parentElement;
        navGroup.classList.toggle("open");
    });
});
// Profile dropdown
const profileButton = document.getElementById("profileButton");
const profileMenu = document.getElementById("profileMenu");

profileButton.addEventListener("click", function () {

    profileMenu.classList.toggle("show");

    const isOpen = profileMenu.classList.contains("show");

    profileButton.setAttribute("aria-expanded", isOpen);

});

// Close menu when clicking outside
document.addEventListener("click", function (event) {

    if (!event.target.closest(".profile-dropdown")) {
        profileMenu.classList.remove("show");
        profileButton.setAttribute("aria-expanded", "false");
    }

});