// script.js
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let formMessage = document.getElementById("formMessage");

  if (name && email && message) {
    formMessage.textContent = "¡Mensaje enviado con éxito!";
    formMessage.style.color = "green";
    this.reset();
  } else {
    formMessage.textContent = "Por favor, completa todos los campos.";
    formMessage.style.color = "red";
  }
});

