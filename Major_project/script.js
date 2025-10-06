document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const passwordError = document.getElementById("passwordError");
  const confirmError = document.getElementById("confirmError");

  [nameError, emailError, phoneError, passwordError, confirmError].forEach(e => e.textContent = "");

  let valid = true;

  if (name.length < 5) {
    nameError.textContent = "Name must be at least 5 characters.";
    valid = false;
  }

  if (!email.includes("@")) {
    emailError.textContent = "Enter a valid email with '@'.";
    valid = false;
  }

  if (phone === "123456789" || phone.length !== 10 || isNaN(phone)) {
    phoneError.textContent = "Enter a valid 10-digit phone number.";
    valid = false;
  }

  if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === name.toLowerCase()) {
    passwordError.textContent = "Password too weak.";
    valid = false;
  }

  if (password !== confirmPassword) {
    confirmError.textContent = "Passwords do not match.";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!!");
    document.getElementById("myForm").reset();
  }
}