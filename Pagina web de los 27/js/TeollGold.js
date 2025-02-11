document.addEventListener("DOMContentLoaded", function () {
    console.log("Página cargada correctamente");

    // Agregar una animación de desplazamiento suave
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
