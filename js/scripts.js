document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    alert('Formulario enviado. ¡Gracias por tu mensaje!');
    
    // Limpiar el formulario
    this.reset();
});