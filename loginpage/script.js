document.getElementById("loginBtn").addEventListener("click", function () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
        errorMessage.textContent = "Invalid Username or Password.";
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";

        // Simulate login success
        let popupMessage = document.getElementById("popup-message");
        popupMessage.textContent = "Login Successful";
        popupMessage.style.display = "block";

        // Hide the pop-up message after 2 seconds
        setTimeout(() => {
            popupMessage.style.display = "none";
        }, 1000);
    }
});
