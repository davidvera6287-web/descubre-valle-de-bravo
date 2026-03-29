function mostrar(seccion, boton, fondo) {
    // 1. Ocultar todas las tarjetas
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('activo');
    });

    // 2. Mostrar la tarjeta seleccionada
    document.getElementById(seccion).classList.add('activo');

    // 3. Cambiar el estado activo de los botones de navegación
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('activo');
    });
    boton.classList.add('activo');

    // 4. Cambiar la imagen de fondo de la sección hero
    document.getElementById('hero-bg').style.backgroundImage = `url('${fondo}')`;
}