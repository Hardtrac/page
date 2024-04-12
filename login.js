function login() {
    // Predefined credentials
    const companyName = "hardtrac";
    const email = "test@email.com";
    const employeeID = "123";
    const password = "123456";

    // Get user input
    const inputCompanyName = document.getElementById("company-name").value;
    const inputEmail = document.getElementById("email").value;
    const inputEmployeeID = document.getElementById("employee-id").value;
    const inputPassword = document.getElementById("password").value;

    // Check credentials
    if (inputCompanyName === companyName && inputEmail === email && inputEmployeeID === employeeID && inputPassword === password) {
        // Redirect to another page
        window.location.href = "https://hardtrac.co.in/?v=6c8403f93333"; // Change 'success.html' to the desired page URL
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

// Toggle password visibility
document.getElementById("show-password").addEventListener("change", function() {
    var passwordInput = document.getElementById("password");
    if (this.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});
