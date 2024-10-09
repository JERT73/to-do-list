document.getElementById("createAccountBtn").addEventListener("click", function () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let successMessage = document.getElementById("success-message");

    if (username === "" || password === "" || password !== confirmPassword) {
        successMessage.textContent = "Passwords do not match.";
        successMessage.style.display = "block";
        successMessage.style.color = "darkred";
    } else {
        successMessage.textContent = "Account Created Successfully!";
        successMessage.style.display = "block";
        successMessage.style.color = "green";

        setTimeout(() => {
            window.location.href = '/to-do-list/loginpage/'; // Redirect to Login Page
        }, 1000);
    }
});
