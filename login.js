function login() {
    console.log("Login function called"); 

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

    console.log("Input Company Name:", inputCompanyName); 
    console.log("Input Email:", inputEmail); 
    console.log("Input Employee ID:", inputEmployeeID); 
    console.log("Input Password:", inputPassword); 

    // Check credentials
    if (inputCompanyName === companyName && inputEmail === email && inputEmployeeID === employeeID && inputPassword === password) {
        console.log("Credentials matched"); 
        // Redirect to another page
        window.location.href = "https://hardtrac.co.in/?v=6c8403f93333";
    } else {
        console.log("Invalid credentials"); 
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

// Check if login function is called
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    console.log("Form submitted"); 
    login(); // Call the login function
});
