$(document).ready(function () {
  // Inicialización del carrusel principal
  $('#carousel').carousel();

  // Manejador para el botón Anterior
  $('.custom-control-prev').click(function () {
    $('#carousel').carousel('prev');
  });

  // Manejador para el botón Siguiente
  $('.custom-control-next').click(function () {
    $('#carousel').carousel('next');
  });

  // Manejador para el botón circular
  $('.boton-circular').click(function () {
    $(this).toggleClass('active');
    updatePreview();
  });

  // Manejador para las vistas previas
  $('.preview-image').click(function () {
    var index = $(this).index();
    $('#carousel').carousel(index);
    updatePreview();
  });

  // Función para actualizar la vista previa
  function updatePreview() {
    // Esperar a que termine la transición del carrusel principal
    $('#carousel').on('slid.bs.carousel', function () {
      var currentIndex = $('#carousel').find('.active').index();
      $('.preview-image').removeClass('active');
      $('.preview-image:eq(' + currentIndex + ')').addClass('active');
      // Eliminar el evento después de usarlo para evitar múltiples llamadas
      $('#carousel').off('slid.bs.carousel');
    });
  }

  // Manejador para clic en cualquier parte del documento
  $(document).click(function (event) {
    if (!$(event.target).closest('.boton-circular').length) {
      // Si el clic no proviene del botón circular, quitar la clase 'active'
      $('.boton-circular').removeClass('active');
      updatePreview();
    }
  });
});
