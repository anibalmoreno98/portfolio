// Obtener el nombre del usuario del localStorage
const usuario = localStorage.getItem('usuario');

// Si el usuario está en el localStorage, mostrar el cartel de bienvenida
if (usuario) {
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.innerText = `¡Bienvenido ${usuario}!`;
    document.getElementById('welcomeBanner').style.display = 'block';
}

// Control de la música de fondo
const audio = document.getElementById('bg-music');
const toggleMusicBtn = document.getElementById('toggleMusic');
const musicIcon = document.getElementById('musicIcon');

// Función para cambiar el estado de la música
toggleMusicBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        toggleMusicBtn.classList.remove('btn-danger');
        toggleMusicBtn.classList.add('btn-success');
        musicIcon.classList.remove('bi-volume-mute');
        musicIcon.classList.add('bi-volume-up');
    } else {
        audio.pause();
        toggleMusicBtn.classList.remove('btn-success');
        toggleMusicBtn.classList.add('btn-danger');
        musicIcon.classList.remove('bi-volume-up');
        musicIcon.classList.add('bi-volume-mute');
    }
});

// Reproducir un sonido al hacer clic en los botones
const clickSound = document.getElementById('click-sound');
const buttons = document.querySelectorAll('.option-btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        clickSound.play();
    });
});
