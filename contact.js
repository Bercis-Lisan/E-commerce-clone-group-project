const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");

function validateForm() {

    let valid = true;

    // Name
    if (nameInput.value.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required";
        valid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value.trim())) {
        document.getElementById("emailError").textContent = "Enter a valid email";
        valid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Phone
    const phonePattern = /^[6-9]\d{9}$/;

    if (!phonePattern.test(phoneInput.value.trim())) {
        document.getElementById("phoneError").textContent =
            "Enter a valid 10-digit phone number";
        valid = false;
    } else {
        document.getElementById("phoneError").textContent = "";
    }

    // Message
    if (messageInput.value.trim().length < 10) {
        document.getElementById("messageError").textContent =
            "Message must contain at least 50 characters";
        valid = false;
    } else {
        document.getElementById("messageError").textContent = "";
    }

    submitBtn.disabled = !valid;

    return valid;
}

// Real-time validation
nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
phoneInput.addEventListener("input", validateForm);
messageInput.addEventListener("input", validateForm);

// Form submit
form.addEventListener("submit", function (event) {

    event.preventDefault();

    if (validateForm()) {

        alert("Message sent successfully!");

        form.reset();

        submitBtn.disabled = true;
    }

});

// Disable button initially
submitBtn.disabled = true;