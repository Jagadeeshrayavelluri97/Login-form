document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();
        let usernameError = document.getElementById("usernameError");
        let passwordError = document.getElementById("passwordError");
        let successPopup = document.getElementById("successPopup");
        let popupMessage = document.getElementById("popupMessage");

        // Reset error messages and hide the popup
        usernameError.textContent = "";
        passwordError.textContent = "";
        successPopup.style.display = "none";

        let isValid = true;

        // Username validation
        if (username === "") {
            usernameError.textContent = "Username is required";
            isValid = false;
        }

        // Password validation
        if (password === "") {
            passwordError.textContent = "Password is required";
            isValid = false;
        } else if (password.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters long";
            isValid = false;
        }

        // Show success popup if validation passes
        if (isValid) {
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            popupMessage.textContent = "Login Successful!";
            successPopup.style.display = "flex";
        }
    });

    // Close popup event
    document.getElementById("closePopup").addEventListener("click", function () {
        document.getElementById("successPopup").style.display = "none";
    });
});
