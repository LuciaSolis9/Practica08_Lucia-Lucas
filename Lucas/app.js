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

const sections = document.querySelectorAll('section');

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    const button = section.querySelector('.toggle-button');
    const content = section.querySelector('.section-content');

    button.addEventListener('click', () => {
      content.style.maxHeight = content.style.maxHeight === '0px' ? content.scrollHeight + 'px' : '0px';
      button.querySelector('i').classList.toggle('fa-plus');
      button.querySelector('i').classList.toggle('fa-minus');
    });
  });
});
