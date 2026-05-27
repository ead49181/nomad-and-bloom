<audio id="bg-music" autoplay loop>
  <source src="audio/your-song.mp3" type="audio/mpeg">
</audio>

<script>
  const music = document.getElementById('bg-music');
  music.volume = 0.3;

  document.addEventListener('click', function() {
    music.play();
  }, { once: true });
</script>