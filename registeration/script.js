
function togglePassword(id, button) {
    const input = document.getElementById(id);
    const icon = button.querySelector("i");

    if (input.type === "password") {
        input.type = "text";
        icon.classList.replace("fa-eye", "fa-eye-slash");
        button.setAttribute("aria-label", "Hide password");
    } else {
        input.type = "password";
        icon.classList.replace("fa-eye-slash", "fa-eye");
        button.setAttribute("aria-label", "Show password");
    }
}

const rating = document.getElementById("rating");
const ratingValue = document.getElementById("rating-value");

rating.addEventListener("input", function () {
    ratingValue.textContent = rating.value;
});
