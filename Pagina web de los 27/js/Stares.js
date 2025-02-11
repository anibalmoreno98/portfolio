// Obtener elementos
const music = document.getElementById('bg-music');
const toggleMusicBtn = document.getElementById('toggleMusic');

// Ajustar el volumen de la música al 25%
music.volume = 0.25;

// Alternar el muteo de la música
toggleMusicBtn.addEventListener('click', () => {
  if (music.muted) {
    music.muted = false;
    toggleMusicBtn.innerText = "🔊"; // Cambiar icono a sonido
  } else {
    music.muted = true;
    toggleMusicBtn.innerText = "🔇"; // Cambiar icono a mute
  }
});

