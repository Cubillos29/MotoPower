function cambiarTexto() {
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = "¡Gracias por hacer clic!";
  }
  
function enviarPorWhatsApp() {
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const producto = document.getElementById("producto").value;
  const mensaje = document.getElementById("mensaje").value;
  const seleccion = document.getElementById("numeroDestino").value.split("|");
  const numeroDestino = seleccion[0];
  const asesor = seleccion[1];

  const texto = `¡Hola ${asesor}! Mi nombre es ${nombre}.%0AQuiero pedir el producto: ${producto}.%0AMi número es: ${telefono}.%0ADetalles: ${mensaje}`;

  const url = `https://wa.me/${numeroDestino}?text=${texto}`;
  window.open(url, '_blank');
}
