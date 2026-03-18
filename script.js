function mostrar(seccion, boton) {
    // ocultar cards
    document.querySelectorAll('.card').forEach(card => {
      card.classList.remove('activo');
    });
  
    // mostrar card
    document.getElementById(seccion).classList.add('activo');
  
    // botones activos
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.remove('activo');
    });
  
    boton.classList.add('activo');
  }