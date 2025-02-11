// Reproducir o Pausar música con el ícono y reproducción de la canción "Icloud.mp3"
let isPlaying = false;
let audioIcon = document.getElementById("audioIcon");
let audio = new Audio('../audio/Icloud.mp3'); // Coloca la ruta correcta de tu archivo .mp3

document.getElementById("playPauseButton").addEventListener("click", function() {
  if (isPlaying) {
    audio.pause();
    audioIcon.innerHTML = "🔊"; // Muestra el ícono de "sonido"
  } else {
    audio.play();
    audioIcon.innerHTML = "🔇"; // Muestra el ícono de "silencio"
  }
  isPlaying = !isPlaying; // Cambia el estado de reproducción
});
