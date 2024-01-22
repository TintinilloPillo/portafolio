document.getElementById('descargarPDF').addEventListener('click', function() {
    // Ruta al archivo PDF
    var rutaPDF = 'docs/Curriculum-Martin-Uriel-Huesca-Quezada.pdf';
    
    // Crea un elemento <a> invisible
    var enlace = document.createElement('a');
    enlace.href = rutaPDF;
    enlace.target = '_blank'; // Abre el enlace en una nueva pestaña
    enlace.download = 'Curriculum-Martin-Uriel-Huesca-Quezada.pdf'; // Nombre del archivo al descargar
    document.body.appendChild(enlace);
    
    // Simula un clic en el enlace para activar la descarga
    enlace.click();
    
    // Elimina el elemento <a> después de la descarga
    document.body.removeChild(enlace);
  });

  document.getElementById('miElemento').addEventListener('click', function() {
    // Agregar la clase para activar la animación
    this.classList.add('scale-up-horizontal-center');
  
    // Eliminar la clase después de la duración de la animación para permitir la repetición
    setTimeout(() => {
      this.classList.remove('scale-up-horizontal-center');
    }, 500); // La misma duración que la animación (0.5s)
  });
  document.getElementById('miElemento2').addEventListener('click', function() {
    // Agregar la clase para activar la animación
    this.classList.add('scale-up-horizontal-center');
  
    // Eliminar la clase después de la duración de la animación para permitir la repetición
    setTimeout(() => {
      this.classList.remove('scale-up-horizontal-center');
    }, 500); // La misma duración que la animación (0.5s)
  });
  document.getElementById('miElemento3').addEventListener('click', function() {
    // Agregar la clase para activar la animación
    this.classList.add('scale-up-horizontal-center');
  
    // Eliminar la clase después de la duración de la animación para permitir la repetición
    setTimeout(() => {
      this.classList.remove('scale-up-horizontal-center');
    }, 500); // La misma duración que la animación (0.5s)
  });