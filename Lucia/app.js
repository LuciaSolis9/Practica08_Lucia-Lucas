document.addEventListener("DOMContentLoaded", () => {
  const toggleBasicButton = document.getElementById("botonImg");
  const conceptosBasicosSection = document.getElementById("img");

  toggleBasicButton.addEventListener("click", () => {
    // Alterna la visibilidad de la sección
    conceptosBasicosSection.classList.toggle("hidden");

    // Cambia el texto del botón según el estado
    if (conceptosBasicosSection.classList.contains("hidden")) {
      toggleBasicButton.textContent = "Mostrar Imagen";
    } else {
      toggleBasicButton.textContent = "Ocultar Imagen";
    }
  });

  const moreInfoButton = document.getElementById("more-info");
  moreInfoButton.addEventListener("click", () => {
    const userResponse = confirm(
      "¿Quieres visitar la documentación oficial de Angular para más detalles sobre plantillas, directivas y enlaces de datos?"
    );
    if (userResponse) {
      window.open("https://docs.angular.lat/guide/architecture-components", "_blank");
    }
  });

  document.getElementById("webFeedbackForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto (recarga de la página)

    // Obtener los valores del formulario
    const rating = document.getElementById("rating").value;

    // Mostrar mensaje de confirmación
    const feedbackMessage = document.getElementById("feedbackMessage");
    feedbackMessage.textContent = `¡Gracias por tu opinión! Has calificado Angular con un ${rating}.`;
    feedbackMessage.style.color = "green";

    // Simular un "reseteo" del formulario
    document.getElementById("webFeedbackForm").reset();
  });

});
