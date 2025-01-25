const togglePasswordButton = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

togglePasswordButton.addEventListener("click", function () {
   const type = passwordField.type === "password" ? "text" : "password";
   passwordField.type = type;
   togglePasswordButton.textContent = type === "password" ? "👁️" : "🙈";
});

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (event) {
   event.preventDefault();

   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;
   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
   const isValidEmail = emailRegex.test(email);
   const isValidUsername = email.length >= 5;

   if (isValidEmail || isValidUsername) {
      alert("Login realizado com sucesso!");
   } else {
      alert("Por favor, insira um e-mail válido ou um nome de usuário.");
   }
});
