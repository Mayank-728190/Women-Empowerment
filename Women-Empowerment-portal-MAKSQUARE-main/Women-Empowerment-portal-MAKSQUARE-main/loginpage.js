document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve email and password from form
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // You can add your authentication logic here
    // For demonstration, let's just show the success message
    document.getElementById("loginMessage").style.display = "block";
    
});
